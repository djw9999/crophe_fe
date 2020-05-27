import { request } from './http';

export async function getPermission(data:any) {
  const res: any = await request('/permissionList', {
    method: "get",
    data
  });
  return res.data;
}