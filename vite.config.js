import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const { VITE_SANITY_PROJECT_ID: projectId } = loadEnv(mode, process.cwd(), 'VITE_');
  const hasProject = /^[a-z0-9-]+$/.test(projectId || '');

  return {
    server: {
      // Keep browser reads on the website origin while developing locally.
      proxy: hasProject ? {
        '/__sanity': {
          target: `https://${projectId}.api.sanity.io`,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/__sanity/, ''),
        },
      } : {},
    },
  };
});
