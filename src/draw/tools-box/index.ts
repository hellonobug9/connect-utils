export * from "./colors";
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

export function getTool(toolName: string): Tools | undefined {
  return Tools[toolName as keyof typeof Tools];
}
