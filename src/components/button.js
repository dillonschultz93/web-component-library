import { html, css, LitElement } from 'lit-element';
import baseStyles from '../assets/styles/component-base-styles.js';

export class Button extends LitElement {
  static get styles() {
    return [
      baseStyles,
      css`
      :host {
        display: inline-block;
      }

      button {
        appearance: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: var(--font-size-regular);
        border-radius: var(--spacing-corner-1);
        padding: var(--spacing-inset-0) var(--spacing-inset-1);
        transition: all 150ms ease-in-out;
        margin: var(--spacing-outset-0);
        box-sizing: border-box;
        box-shadow: var(--drop-shadow-initial);
      }

      button slot {
        font-weight: var(--font-weight-semi-bold);
        text-decoration: none;
      }

      a {
        appearance: none;
        outline: none;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        font-size: var(--font-size-regular);
        border-radius: var(--spacing-corner-1);
        padding: var(--spacing-inset-0) var(--spacing-inset-1);
        transition: all 150ms ease-in-out;
        margin: var(--spacing-outset-0);
        box-sizing: border-box;
        box-shadow: var(--drop-shadow-initial);
      }

      a slot {
        font-weight: var(--font-weight-semi-bold);
        text-decoration: none;
      }

      .default {
        background: var(--color-grey-1);
        border: 1px solid var(--color-grey-2);
      }

      .default slot {
        color: var(--color-grey-9);
      }

      .default:focus {
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-grey-4);
      }

      .default:hover {
        background: var(--color-grey-2);
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-grey-4);
      }

      .default:active {
        background: var(--color-grey-4);
        box-shadow: var(--drop-shadow-active);
        transform: scale(0.99);
      }

      .default:disabled {
        border: none;
        background: var(--color-grey-2);
        box-shadow: none;
        cursor: not-allowed;
      }

      .default:disabled slot {
        color: var(--color-grey-5);
      }

      .primary {
        background: var(--color-indigo-5);
        border: 1px solid transparent;
      }

      .primary slot {
        color: var(--color-grey-0);
      }

      .primary:focus {
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-indigo-9);
      }

      .primary:hover {
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-indigo-9);
        background: var(--color-indigo-6);
      }

      .primary:active {
        box-shadow: var(--drop-shadow-active);
        background: var(--color-indigo-8);
        transform: scale(0.99);
      }

      .primary:disabled {
        border: none;
        background: var(--color-grey-2);
        box-shadow: none;
        cursor: not-allowed;
      }

      .primary:disabled slot {
        color: var(--color-grey-5);
      }

      .ghost {
        background: transparent;
        box-shadow: none;
        border: 1px solid transparent;
      }

      .ghost slot {
        color: var(--color-indigo-5);
      }

      .ghost:focus {
        border-color: var(--color-indigo-1);
      }

      .ghost:hover {
        background: var(--color-indigo-0);
      }

      .ghost:active {
        background: var(--color-indigo-1);
        transform: scale(0.99);
      }

      .ghost:active slot {
        color: var(--color-indigo-6);
      }

      .ghost:disabled {
        background: var(--color-grey-2);
        cursor: not-allowed;
      }

      .ghost:disabled slot {
        color: var(--color-grey-5);
      }

      .danger {
        background: var(--color-danger-3);
        border: 1px solid transparent;
      }

      .danger slot {
        color: var(--color-grey-0);
      }

      .danger:focus {
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-danger-4);
      }

      .danger:hover {
        background: var(--color-danger-4);
        box-shadow: var(--drop-shadow-hover);
        border-color: var(--color-danger-4);
      }

      .danger:active {
        background: var(--color-danger-5);
        box-shadow: var(--drop-shadow-active);
        border-color: var(--color-danger-5);
        transform: scale(0.99);
      }

      .danger:disabled {
        border: none;
        background: var(--color-grey-2);
        box-shadow: none;
        cursor: not-allowed;
      }

      .danger:disabled slot {
        color: var(--color-grey-5);
      }
    `,
    ];
  }

  static get properties() {
    return {
      type: { type: String },
      disabled: { type: Boolean },
      href: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'default';
  }

  render() {
    if (this.href) {
      return html`<a class=${this.type} href=${this.href} target="_blank" rel="noreferrer noopener" ?disabled=${this.disabled}><slot></slot></a>`;
    }
    return html`<button class=${this.type} ?disabled=${this.disabled}><slot></slot></button>`;
  }
}
