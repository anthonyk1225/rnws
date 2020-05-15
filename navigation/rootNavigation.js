import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function currentScreen() {
  const routes = navigationRef.current.getRootState().routes;
  const routeLength = routes.length;
  return routes[routeLength - 1].name;
}