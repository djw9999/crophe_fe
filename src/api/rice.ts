import { request } from './http';

export async function getRiceQzWyPermission(data:any) {
  const res: any = await request('/permissionList', {
    method: "get",
    data
  });
  return res.data;
}