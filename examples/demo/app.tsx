// @ts-ignore
import { RouterConfig } from 'vdlijs';

export function onRouterCreated({ router }: any) {
  console.log('onRouterCreated', router);
}

export function onAppCreated({ app }: any) {
  console.log('onAppCreated', app);
}

export function onMounted({ app, router }: any) {
  console.log('onMounted', app, router);
  app.provide('vdlijs-hello', {
    h: 'hello',
    w: 'word',
  });
}

export const router: RouterConfig = {
  // @ts-ignore
  scrollBehavior(to, from) {
    console.log('scrollBehavior', to, from);
  },
};
