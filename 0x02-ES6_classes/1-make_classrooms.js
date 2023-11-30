import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const cls_obj1 = new ClassRoom(19);
  const cls_obj2 = new ClassRoom(20);
  const cls_obj3 = new ClassRoom(34);

  return [cls_obj1, cls_obj2, cls_obj3];
}
