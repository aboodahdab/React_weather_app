interface Props {
  state: boolean;
  num: number;
}
// this is used to get fahrenhit and celsuis without making another API call
export default function transformFToC(state: boolean, num: number) {
  if (state) {
    // from fahrenhit to celsuis
    return Math.round(num * 1.8 + 32);
  }

  // from celsuis to fahrenhit
  return Math.round((num - 32) / 1.8);
}
