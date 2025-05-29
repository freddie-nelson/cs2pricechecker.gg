export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randomElement<T>(array: T[]): T {
  return array[randomInt(0, array.length - 1)];
}

export function randomBool(): boolean {
  return Math.random() < 0.5;
}
