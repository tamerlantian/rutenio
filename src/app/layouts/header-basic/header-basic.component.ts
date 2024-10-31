import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-header-basic',
	standalone: true,
	imports: [],
	templateUrl: './header-basic.component.html',
	styleUrl: './header-basic.component.scss'
})
export class HeaderBasicComponent {
	@HostBinding('class') hostClass = 'fixed py-4 top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500 shadow-sm dark:border-b dark:border-b-coal-100';
	@HostBinding('attr.role') hostRole = 'banner';
	@HostBinding('attr.data-sticky') dataSticky = 'true';
	@HostBinding('attr.data-sticky-name') dataStickyName = 'header';
	@HostBinding('id') hostId = 'header';
}
