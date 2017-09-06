import { Component } from '@angular/core';
require('font-awesome-webpack');
require('font-awesome/css/font-awesome.css');

@Component({
    selector: 'demo-app',
    template: require('./demo.html'),
    styles: [require('./demo.css')]
})
export class DemoComponent {
    private sections: Map<string, string> = new Map<string, string>();

    constructor() {
        this.sections.set('default', 'template');
        this.sections.set('full', 'template');
        this.sections.set('number', 'template');
        this.sections.set('number_unit', 'template');
        this.sections.set('ng_content', 'template');
        this.sections.set('fully_with_ng_content', 'template');
        this.sections.set('no_icon', 'template');
    }

    private activate(section: string, tab: string): void {
        this.sections.set(section, tab);
    }
    private isActive(section: string, tab: string): boolean {
        return this.sections.get(section) === tab;
    }

    private showValue($event: any): void {
        console.log($event);
    }
}
