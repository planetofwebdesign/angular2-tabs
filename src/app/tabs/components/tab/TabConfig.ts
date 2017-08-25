import { ITab } from './tab.model';
export class TabConfig implements ITab {
    constructor(
    public title: string,
    public id: number,
    public active = false
    ) {}

}
