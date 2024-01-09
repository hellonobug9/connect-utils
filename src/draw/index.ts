export enum Tools {
  Cursor = "cursor",
  Pencil = "pencil",
  Laser = "laser",
  StrokeWidth = "stroke-width",
  Undo = "undo",
  EraserAll = "eraser-all",
  Rectangle = "rectangle",
  Circle = "circle",
  Text = "text",
  Zoom = "zoom",
}
export enum Colors {
  Black = "black",
  Red = "red",
  Green = "green",
  Blue = "blue",
  Yellow = "yellow",
  Orange = "orange",
  White = "white",
  Purple = "purple",
}
export enum BoardIngredients {
  // Background của canvas, là ảnh lesson plan
  BoardBackgroundImage = "BoardBackgroundImage",
  // Hình vẽ đến từ curriculum (target)
  StaticDrawing = "StaticDrawing",
  // Hình vẽ của teacher vẽ khi đang dạy học
  DynamicDrawing = "DynamicDrawing",
}
export function getTool(toolName: string): Tools | undefined {
  return Tools[toolName as keyof typeof Tools];
}
export const GSConnectBoard = {
  width: 717,
  height: 435,
  tools: Object.values(Tools),
  colors: Object.values(Colors),
};
