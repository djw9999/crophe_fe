import { RouteProps } from "react-router-dom";
import { RiceQzWy } from '../components/RiceQzWy';

interface IRouteData {
    [key: string]: RouteProps
  }

export const routes:IRouteData = {
    riceQzWy: {
        path: "/data/riceQzWy",
        component: RiceQzWy
    }
}