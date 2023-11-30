import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const clsObj1 = new ClassRoom(19);
  const clsObj2 = new ClassRoom(20);
  const clsObj3 = new ClassRoom(34);

  return [clsObj1, clsObj2, clsObj3];
}
