import { AppAPI, APPDataObject } from '../../types'

export default (v2ex: AppAPI.APP): AppAPI.Notification => ({
  /**
   * Get my latest notifications
   */
  list: (page: number) =>
    v2ex.get<APPDataObject.Notification[]>(`/notifications?p=${page}`, undefined, undefined, undefined, 'v2'),

  /**
   * Remove notification
   */
  remove: (id: string) => v2ex.delete<any>(`/notifications/${id}`, undefined, undefined, 'v2')
})
