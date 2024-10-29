export interface ExternalLink {
  /** Link to specific social network. */
  link: string;

  /** Social network icon. This must be import to src/icons before use. */
  icon: string;

  /** Social network name. */
  name: string;

  /** A short description about your activity in the current social network. */
  desc: string;

  /** The background color for current card */
  color?: string;
}
