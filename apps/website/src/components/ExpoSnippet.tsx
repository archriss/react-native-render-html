import React, {
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef
} from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './ExpoSnippet.module.scss';

function makeIframeSrcParamsQuery({
  name,
  description,
  theme,
  iframeId
}: {
  name: string;
  description?: string;
  theme: 'light' | 'dark';
  iframeId: string;
}) {
  return [
    ['iframeId', iframeId],
    ['preview', 'true'],
    ['platform', 'my device'],
    ['supportedPlatforms', 'ios,android'],
    name ? ['name', encodeURIComponent(name)] : null,
    description ? ['description', encodeURIComponent(description)] : null,
    ['theme', theme],
    ['verbose', 'false'],
    ['waitForData', 'true']
  ]
    .filter((v) => !!v)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
}

function installIframeListener({
  iframe,
  iframeId,
  code,
  version
}: {
  iframe: HTMLIFrameElement;
  iframeId: string;
  code: string;
  version: string;
}) {
  const listener = function (event: MessageEvent) {
    var eventName = event.data[0];
    var data = event.data[1];
    if (eventName === 'expoFrameLoaded' && data.iframeId === iframeId) {
      iframe.contentWindow.postMessage(
        [
          'expoDataEvent',
          {
            iframeId: iframeId,
            dependencies: `react-native-render-html@${version},domutils,domhandler,@jsamr/counter-style,@jsamr/counter-style/presets/thai`,
            code,
            files: ''
          }
        ],
        '*'
      );
    }
  };
  window.addEventListener('message', listener);
  // cleanup
  return () => window.removeEventListener('message', listener);
}

const ExpoIframe = memo(function ExpoIframe({
  name,
  description,
  theme,
  code,
  version
}: {
  name?: string;
  description?: string;
  theme: 'light' | 'dark';
  code: string;
  version: string;
}) {
  // see https://git.io/JOX5X
  const iframeId = useRef(Math.random().toString(36).substr(2, 10));
  const ref = useRef<HTMLIFrameElement>(null);
  const params = useMemo(
    () =>
      makeIframeSrcParamsQuery({
        iframeId: iframeId.current,
        name,
        theme,
        description
      }),
    [description, name, theme]
  );
  const src = `https://snack.expo.io/embedded?${params}`;
  useEffect(
    function postIframeMessage() {
      const cleanup = installIframeListener({
        iframe: ref.current,
        iframeId: iframeId.current,
        code,
        version
      });
      return cleanup;
    },
    [code, version]
  );
  return (
    <iframe
      className={styles.expoIframe}
      ref={ref}
      src={src}
      frameBorder="0"
      loading="lazy"
      data-snack-iframe={true}
    />
  );
});

export default function ExpoSnippet({
  snippet,
  title,
  caption,
  version,
  className
}: PropsWithChildren<{
  title: string;
  snippet: string;
  caption?: string;
  version: string;
  className?: string;
}>) {
  const { isDarkTheme } = useThemeContext();
  const style: React.CSSProperties = {
    backgroundColor: isDarkTheme ? '#212121' : '#f9f9f9'
  };
  return (
    <div className={className} style={style}>
      <ExpoIframe
        code={snippet}
        theme={isDarkTheme ? 'dark' : 'light'}
        name={title}
        description={caption}
        version={version}
      />
    </div>
  );
}
