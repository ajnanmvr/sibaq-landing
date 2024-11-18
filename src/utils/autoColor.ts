export default function autoColor(index: number, classes: string[]) {
  return classes[index % classes.length];
}
