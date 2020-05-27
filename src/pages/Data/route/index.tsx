import { RouteProps } from "react-router-dom";
import { RiceQzWy } from '../pages/RiceQzWy';
import { RiceRlxWy } from '../pages/RiceRlxWy';
import { RiceData } from '../pages/RiceData';

interface IRouteData {
    [key: string]: RouteProps
  }

export const routes:IRouteData = {
    riceQzWy: {
        path: "/dataSearch/riceQzWy",
        component: RiceQzWy
    },
    riceRlxWy: {
        path: "/dataSearch/riceRlxWy",
        component: RiceRlxWy
    },
    riceData: {
        path: '/dataSearch/riceData',
        component: RiceData
    }
}