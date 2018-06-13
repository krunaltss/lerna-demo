(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tsswdmenu', ['exports', '@angular/core'], factory) :
    (factory((global.tsswdmenu = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TsswdmenuService = (function () {
        function TsswdmenuService() {
        }
        TsswdmenuService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TsswdmenuService.ctorParameters = function () { return []; };
        /** @nocollapse */ TsswdmenuService.ngInjectableDef = i0.defineInjectable({ factory: function TsswdmenuService_Factory() { return new TsswdmenuService(); }, token: TsswdmenuService, providedIn: "root" });
        return TsswdmenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TsswdmenuComponent = (function () {
        function TsswdmenuComponent() {
        }
        /**
         * @return {?}
         */
        TsswdmenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TsswdmenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tsswdmenu',
                        template: "\n    <p>\n      tsswdmenu works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TsswdmenuComponent.ctorParameters = function () { return []; };
        return TsswdmenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TsswdmenuModule = (function () {
        function TsswdmenuModule() {
        }
        TsswdmenuModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TsswdmenuComponent],
                        exports: [TsswdmenuComponent]
                    },] },
        ];
        return TsswdmenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TsswdmenuService = TsswdmenuService;
    exports.TsswdmenuComponent = TsswdmenuComponent;
    exports.TsswdmenuModule = TsswdmenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzd2RtZW51LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdHNzd2RtZW51L2xpYi90c3N3ZG1lbnUuc2VydmljZS50cyIsIm5nOi8vdHNzd2RtZW51L2xpYi90c3N3ZG1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly90c3N3ZG1lbnUvbGliL3Rzc3dkbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUc3N3ZG1lbnVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRzc3dkbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3N3ZG1lbnUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRzc3dkbWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHNzd2RtZW51Q29tcG9uZW50IH0gZnJvbSAnLi90c3N3ZG1lbnUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUc3N3ZG1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHNzd2RtZW51Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUc3N3ZG1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsrQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSxpREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztpQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM5Qjs7OEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=