import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return [
      <p>
        Hello, World! I'm {this.first} {this.last}
      </p>,
      <slot />
    ];
  }
}
