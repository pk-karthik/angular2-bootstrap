System.registerDynamic("samples/carousel/demo-carousel.js",["angular2/angular2.js","angular2-bootstrap.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=a("angular2-bootstrap.js"),j=function(){function a(){this.slideIndex=1,this.slideWrap=!0,this.slideInterval=5e3,this.slidePause="hover",this.slideNoTransition=!1,this.extraSlides=!1}return a.prototype.onIndexFieldChange=function(a){this.slideIndex=a.target.value},a.prototype.onIndexChange=function(a){this.slideIndex=a},a.prototype.onIntervalFieldChange=function(a){this.slideInterval=a.target.value},a.prototype.onWrapCheckboxChange=function(a){this.slideWrap=a.target.checked},a.prototype.onPauseCheckboxChange=function(a){this.slidePause=a.target.checked?"hover":""},a.prototype.onAnimationCheckboxChange=function(a){this.slideNoTransition=!a.target.checked},a.prototype.onExtraCheckboxChange=function(a){this.extraSlides=a.target.checked},a.prototype.onSlideStart=function(){},a.prototype.onSlideEnd=function(){},a=f([h.Component({selector:"demo-carousel",template:'<carousel [interval]=slideInterval [index]=slideIndex [wrap]=slideWrap [pause]=slidePause [no-transition]=slideNoTransition (indexchange)=onIndexChange($event) (slidestart)=onSlideStart() (slideend)=onSlideEnd()><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/400><carousel-caption><h3>First slide label</h3><p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></carousel-caption></carousel-slide><carousel-slide *ng-if=extraSlides><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/399></carousel-slide><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/801/400></carousel-slide><carousel-slide><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/401></carousel-slide><carousel-slide *ng-if=extraSlides><img style="width: 800px; height: 400px;" src=http://placekitten.com/800/402></carousel-slide></carousel><form role=form><div class=form-group><label>Index (0-based)</label> <input type=number class=form-control [value]=slideIndex (change)=onIndexFieldChange($event)></div><div class=form-group><label>Interval (negative number to stop the cycle)</label> <input type=number class=form-control [value]=slideInterval (change)=onIntervalFieldChange($event)></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=slideWrap (change)=onWrapCheckboxChange($event)> Wrap active</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=slidePause (change)=onPauseCheckboxChange($event)> Pause on hover</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=!slideNoTransition (change)=onAnimationCheckboxChange($event)> With animations</label></div></div><div class=form-group><div class=checkbox><label><input type=checkbox [checked]=extraSlides (change)=onExtraCheckboxChange($event)> Add/Remove extra slides (2nd and last positions)</label></div></div></form>',directives:[h.NgIf,i.Carousel,i.CarouselSlide,i.CarouselCaption]}),g("design:paramtypes",[])],a)}();return b.DemoCarousel=j,d.define=e,c.exports}),System.registerDynamic("samples/carousel/doc-carousel.js",["angular2/angular2.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=function(){function a(){}return a=f([h.Component({selector:"doc-carousel",template:'<p>A carousel component similar to <a href=http://getbootstrap.com/javascript/#carousel>Bootstrap javascript carousel</a></p><h4 id=properties>Properties</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><strong>index</strong></td><td>number</td><td>0</td><td>Index (0-based) of the active slide.</td></tr><tr><td><strong>interval</strong></td><td>number</td><td>5000</td><td>The amount of time to delay between automatically cycling an item. If false or negative, carousel will not automatically cycle.</td></tr><tr><td><strong>pause</strong></td><td>string</td><td>&quot;hover&quot;</td><td>Pauses the cycling of the carousel on mouseover and resumes the cycling of the carousel on mouseout.</td></tr><tr><td><strong>wrap</strong></td><td>boolean</td><td>true</td><td>Whether the carousel should cycle continuously or have hard stops.</td></tr><tr><td><strong>no-transition</strong></td><td>boolean</td><td>false</td><td>Whether transitions are activated.</td></tr></tbody></table><h4 id=elements>Elements</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Description</th><th></th></tr></thead><tbody><tr><td><strong>carousel-slide</strong></td><td>A slide of the carousel. The content is the body of the slide, any HTML element.</td><td></td></tr><tr><td><strong>carousel-slide &gt; carousel-caption</strong></td><td>The caption of the slide, a block of HTML displayed at the bottom center.</td><td>Optionnal</td></tr></tbody></table><h4 id=events>Events</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><strong>indexchange</strong></td><td>This event fires when the index changes.</td></tr><tr><td><strong>slidestart</strong></td><td>This event fires immediately when the transition starts.</td></tr><tr><td><strong>slideend</strong></td><td>This event is fired when the carousel has completed its slide transition.</td></tr></tbody></table>'}),g("design:paramtypes",[])],a)}();b.DocCarousel=i;var j=function(){function a(){}return a=f([h.Component({selector:"source-html-carousel",template:'<pre><code class="language-html" ng-non-bindable>&lt;carousel [interval]=&quot;slideInterval&quot; [index]=&quot;slideIndex&quot; [wrap]=&quot;slideWrap&quot; [pause]=&quot;slidePause&quot; [no-transition]=&quot;slideNoTransition&quot;&#10;    (indexchange)=&quot;onIndexChange($event)&quot; (slidestart)=&quot;onSlideStart()&quot; (slideend)=&quot;onSlideEnd()&quot;&gt;&#10;  &lt;carousel-slide&gt;&#10;    &lt;img style=&quot;width: 800px; height: 400px;&quot; src=&quot;http://placekitten.com/800/400&quot;&gt;&#10;    &lt;carousel-caption&gt;&#10;      &lt;h3&gt;First slide label&lt;/h3&gt;&#10;      &lt;p&gt;Nulla vitae elit libero, a pharetra augue mollis interdum.&lt;/p&gt;&#10;    &lt;/carousel-caption&gt;&#10;  &lt;/carousel-slide&gt;&#10;  &lt;carousel-slide *ng-if=&quot;extraSlides&quot;&gt;&#10;    &lt;img style=&quot;width: 800px; height: 400px;&quot; src=&quot;http://placekitten.com/800/399&quot;&gt;&#10;  &lt;/carousel-slide&gt;&#10;  &lt;carousel-slide&gt;&#10;    &lt;img style=&quot;width: 800px; height: 400px;&quot; src=&quot;http://placekitten.com/801/400&quot;&gt;&#10;  &lt;/carousel-slide&gt;&#10;  &lt;carousel-slide&gt;&#10;    &lt;img style=&quot;width: 800px; height: 400px;&quot; src=&quot;http://placekitten.com/800/401&quot;&gt;&#10;  &lt;/carousel-slide&gt;&#10;  &lt;carousel-slide *ng-if=&quot;extraSlides&quot;&gt;&#10;    &lt;img style=&quot;width: 800px; height: 400px;&quot; src=&quot;http://placekitten.com/800/402&quot;&gt;&#10;  &lt;/carousel-slide&gt;&#10;&lt;/carousel&gt;&#10;&#10;&lt;form role=&quot;form&quot;&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;label&gt;Index (0-based)&lt;/label&gt;&#10;    &lt;input type=&quot;number&quot; class=&quot;form-control&quot; [value]=&quot;slideIndex&quot; (change)=&quot;onIndexFieldChange($event)&quot;&gt;&#10;  &lt;/div&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;label&gt;Interval (negative number to stop the cycle)&lt;/label&gt;&#10;    &lt;input type=&quot;number&quot; class=&quot;form-control&quot; [value]=&quot;slideInterval&quot; (change)=&quot;onIntervalFieldChange($event)&quot;&gt;&#10;  &lt;/div&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;div class=&quot;checkbox&quot;&gt;&#10;      &lt;label&gt;&#10;        &lt;input type=&quot;checkbox&quot; [checked]=&quot;slideWrap&quot; (change)=&quot;onWrapCheckboxChange($event)&quot;&gt; Wrap active&#10;      &lt;/label&gt;&#10;    &lt;/div&gt;&#10;  &lt;/div&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;div class=&quot;checkbox&quot;&gt;&#10;      &lt;label&gt;&#10;        &lt;input type=&quot;checkbox&quot; [checked]=&quot;slidePause&quot; (change)=&quot;onPauseCheckboxChange($event)&quot;&gt; Pause on hover&#10;      &lt;/label&gt;&#10;    &lt;/div&gt;&#10;  &lt;/div&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;div class=&quot;checkbox&quot;&gt;&#10;      &lt;label&gt;&#10;        &lt;input type=&quot;checkbox&quot; [checked]=&quot;!slideNoTransition&quot; (change)=&quot;onAnimationCheckboxChange($event)&quot;&gt; With animations&#10;      &lt;/label&gt;&#10;    &lt;/div&gt;&#10;  &lt;/div&gt;&#10;  &lt;div class=&quot;form-group&quot;&gt;&#10;    &lt;div class=&quot;checkbox&quot;&gt;&#10;      &lt;label&gt;&#10;        &lt;input type=&quot;checkbox&quot; [checked]=&quot;extraSlides&quot; (change)=&quot;onExtraCheckboxChange($event)&quot;&gt; Add/Remove extra slides (2nd and last positions)&#10;      &lt;/label&gt;&#10;    &lt;/div&gt;&#10;  &lt;/div&gt;&#10;&lt;/form&gt;&#10;</code></pre>'}),g("design:paramtypes",[])],a)}();b.SourceHtmlCarousel=j;var k=function(){function a(){}return a=f([h.Component({selector:"source-ts-carousel",template:'<pre><code class="language-typescript" ng-non-bindable>import {Component, NgIf} from &#39;angular2/angular2&#39;;&#10;import {Carousel, CarouselSlide, CarouselCaption} from &#39;angular2-bootstrap&#39;;&#10;&#10;@Component({&#10;  selector: &#39;demo-carousel&#39;,&#10;  templateUrl: &#39;./samples/carousel/demo-carousel.html&#39;,&#10;  directives: [NgIf, Carousel, CarouselSlide, CarouselCaption]&#10;})&#10;export class DemoCarousel {&#10;  slideIndex;&#10;  slideWrap;&#10;  slideInterval;&#10;  slidePause;&#10;  slideNoTransition;&#10;  extraSlides;&#10;  constructor() {&#10;    this.slideIndex = 1;&#10;    this.slideWrap = true;&#10;    this.slideInterval = 5000;&#10;    this.slidePause = &quot;hover&quot;;&#10;    this.slideNoTransition = false;&#10;    this.extraSlides = false;&#10;  }&#10;  onIndexFieldChange(event) {&#10;    this.slideIndex = event.target.value;&#10;  }&#10;  onIndexChange(newValue) {&#10;    this.slideIndex = newValue;&#10;  }&#10;  onIntervalFieldChange(event) {&#10;    this.slideInterval = event.target.value;&#10;  }&#10;  onWrapCheckboxChange(event) {&#10;    this.slideWrap = event.target.checked;&#10;  }&#10;  onPauseCheckboxChange(event) {&#10;    this.slidePause = event.target.checked ? &quot;hover&quot;: &quot;&quot;;&#10;  }&#10;  onAnimationCheckboxChange(event) {&#10;    this.slideNoTransition = !event.target.checked;&#10;  }&#10;  onExtraCheckboxChange(event) {&#10;    this.extraSlides = event.target.checked;&#10;  }&#10;  onSlideStart() {&#10;    //console.log(&quot;Start sliding&quot;);&#10;  }&#10;  onSlideEnd() {&#10;    //console.log(&quot;End sliding&quot;);&#10;  }&#10;}&#10;</code></pre>'}),g("design:paramtypes",[])],a)}();return b.SourceTsCarousel=k,d.define=e,c.exports}),System.registerDynamic("samples/alert/demo-alert.js",["angular2/angular2.js","angular2-bootstrap.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=a("angular2-bootstrap.js"),j=function(){function a(){this.alertOpened=!0}return a.prototype.close=function(a){a.preventDefault(),this.alertOpened=!1},a.prototype.log=function(a){console.log(a)},a.prototype.toggle=function(){this.alertOpened=!this.alertOpened},a=f([h.Component({selector:"demo-alert",template:'<alert type=success [dismissible]=false [(opened)]=alertOpened>I am an alert without a close button!<br><a href=# (click)=close($event)>Close Me!</a></alert><alert type=info fade=false>I am an alert without any closing transition - close me and I just disappear!</alert><alert type=warning (closestart)="log(\'Start\')" (closeend)="log(\'End\')">I am an alert with callbacks for onclosestart and oncloseend - close me and check your console!</alert><alert>I am the default type of alert which is "danger", so no attributes needed for me!</alert><button type=button class="btn btn-default" (click)=toggle()>Open and close an alert from a button!</button>',directives:[i.Alert]}),g("design:paramtypes",[])],a)}();return b.DemoAlert=j,d.define=e,c.exports}),System.registerDynamic("samples/alert/doc-alert.js",["angular2/angular2.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=function(){function a(){}return a=f([h.Component({selector:"doc-alert",template:'<p>An alert similar to <a href=http://getbootstrap.com/javascript/#alerts>Bootstrap javascript alert</a></p><h4 id=attributes>Attributes</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Binding</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><strong>dismissable</strong></td><td>1-way</td><td>boolean</td><td>true</td><td>Whether the alert contains a close button.</td></tr><tr><td><strong>fade</strong></td><td>none</td><td>boolean</td><td>true</td><td>Whether the alert will animate out when closed.</td></tr><tr><td><strong>type</strong></td><td>1-way</td><td>string</td><td>danger</td><td>Possible types include: success, info, warning, danger.</td></tr><tr><td><strong>opened</strong></td><td>2-way</td><td>boolean</td><td>true</td><td>Used to bind the onclose method.</td></tr></tbody></table><h4 id=events>Events</h4><table class="table table-bordered"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><strong>closestart</strong></td><td>Called immediately when the close method is called.</td></tr><tr><td><strong>closeend</strong></td><td>Called when the alert has been closed (will wait for CSS transitions to complete).</td></tr></tbody></table>'}),g("design:paramtypes",[])],a)}();b.DocAlert=i;var j=function(){function a(){}return a=f([h.Component({selector:"source-html-alert",template:'<pre><code class="language-html" ng-non-bindable>&lt;alert type=&quot;success&quot; [dismissible]=&quot;false&quot; [(opened)]=&quot;alertOpened&quot;&gt;&#10;	I am an alert without a close button! &lt;br&gt;&lt;a href=&quot;#&quot; (click)=&quot;close($event)&quot;&gt;Close Me!&lt;/a&gt;&#10;&lt;/alert&gt;&#10;&#10;&lt;alert type=&quot;info&quot; fade=&quot;false&quot;&gt;&#10;	I am an alert without any closing transition - close me and I just disappear!&#10;&lt;/alert&gt;&#10;&#10;&lt;alert type=&quot;warning&quot; (closestart)=&quot;log(&#39;Start&#39;)&quot; (closeend)=&quot;log(&#39;End&#39;)&quot;&gt;&#10;	I am an alert with callbacks for onclosestart and oncloseend - close me and check your console!&#10;&lt;/alert&gt;&#10;&#10;&lt;alert&gt;&#10;	I am the default type of alert which is &quot;danger&quot;, so no attributes needed for me!&#10;&lt;/alert&gt;&#10;&#10;&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot; (click)=&quot;toggle()&quot;&gt;&#10;	Open and close an alert from a button!&#10;&lt;/button&gt;</code></pre>'}),g("design:paramtypes",[])],a)}();b.SourceHtmlAlert=j;var k=function(){function a(){}return a=f([h.Component({selector:"source-ts-alert",template:'<pre><code class="language-typescript" ng-non-bindable>import {Component} from &#39;angular2/angular2&#39;;&#10;import {Alert} from &#39;angular2-bootstrap&#39;;&#10;&#10;@Component({&#10;  selector: &#39;demo-alert&#39;,&#10;  templateUrl: &#39;./samples/alert/demo-alert.html&#39;,&#10;  directives: [Alert]&#10;})&#10;export class DemoAlert {&#10;  private alertOpened: boolean = true;&#10;  &#10;  close(evt: MouseEvent) {&#10;    evt.preventDefault();&#10;    this.alertOpened = false;&#10;  }&#10;  &#10;  log(msg: string) {&#10;    console.log(msg);&#10;  }&#10;  &#10;  toggle() {&#10;    this.alertOpened = !this.alertOpened;&#10;  }&#10;}</code></pre>'}),g("design:paramtypes",[])],a)}();return b.SourceTsAlert=k,d.define=e,c.exports}),System.registerDynamic("content/capitalize.js",["angular2/angular2.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=function(){function a(){}return a.prototype.transform=function(a,b){return a.charAt(0).toUpperCase()+a.slice(1)},a=f([h.Pipe({name:"capitalize"}),g("design:paramtypes",[])],a)}();return b.Capitalize=i,d.define=e,c.exports}),System.registerDynamic("samples/sample.js",["angular2/angular2.js","angular2/router.js","samples/carousel/demo-carousel.js","samples/carousel/doc-carousel.js","samples/alert/demo-alert.js","samples/alert/doc-alert.js","content/capitalize.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=a("angular2/router.js"),j=a("samples/carousel/demo-carousel.js"),k=a("samples/carousel/doc-carousel.js"),l=a("samples/alert/demo-alert.js"),m=a("samples/alert/doc-alert.js"),n=a("content/capitalize.js"),o=function(){function a(a,b,c){this._isHTMLActive=!0,this._displayHTML="block",this._displayTS="none",this._name=a.get("name");var d=this._getSample(this._name),e=d.demo,f=d.doc,g=d.html,h=d.ts;c.loadIntoLocation(e,b,"demo"),c.loadIntoLocation(f,b,"doc"),c.loadIntoLocation(g,b,"html"),c.loadIntoLocation(h,b,"ts")}return a.prototype.toggle=function(a){a.preventDefault(),this._isHTMLActive=!this._isHTMLActive,this._displayHTML=this._isHTMLActive?"block":"none",this._displayTS=this._isHTMLActive?"none":"block"},a.prototype._getSample=function(a){return"carousel"==a?{demo:j.DemoCarousel,doc:k.DocCarousel,html:k.SourceHtmlCarousel,ts:k.SourceTsCarousel}:{demo:l.DemoAlert,doc:m.DocAlert,html:m.SourceHtmlAlert,ts:m.SourceTsAlert}},a=f([h.Component({selector:"sample"}),h.View({template:'<section><h1>{{_name | capitalize}}</h1><div class=row><div class=col-md-6><div #demo></div></div><div class=col-md-6><div #doc></div></div></div><ul class="nav nav-tabs"><li role=presentation [class.active]=_isHTMLActive><a href=# (click)=toggle($event)>HTML</a></li><li role=presentation [class.active]=!_isHTMLActive><a href=# (click)=toggle($event)>TypeScript</a></li></ul><div class="panel panel-default" style=border-top:0;border-top-left-radius:0;><div [style.display]=_displayHTML><div #html></div></div><div [style.display]=_displayTS><div #ts></div></div></div></section>',pipes:[n.Capitalize]}),g("design:paramtypes",[i.RouteParams,h.ElementRef,h.DynamicComponentLoader])],a)}();return b.Sample=o,d.define=e,c.exports}),System.registerDynamic("samples/samples.js",["angular2/angular2.js","samples/carousel/demo-carousel.js","samples/carousel/doc-carousel.js","samples/alert/demo-alert.js","samples/alert/doc-alert.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=a("samples/carousel/demo-carousel.js"),j=a("samples/carousel/doc-carousel.js"),k=a("samples/alert/demo-alert.js"),l=a("samples/alert/doc-alert.js"),m=function(){function a(){}return a=f([h.Component({selector:"samples"}),h.View({template:"<p class=lead>Angular2 directives for Bootstrap.</p><section><hr><h1 id=carousel>Carousel</h1><div class=row><div class=col-md-6><demo-carousel></demo-carousel></div><div class=col-md-6><doc-carousel></doc-carousel></div></div></section><section><hr><h1 id=alert>Alert</h1><div class=row><div class=col-md-6><demo-alert></demo-alert></div><div class=col-md-6><doc-alert></doc-alert></div></div></section>",directives:[i.DemoCarousel,j.DocCarousel,k.DemoAlert,l.DocAlert]}),g("design:paramtypes",[])],a)}();return b.Samples=m,d.define=e,c.exports}),System.registerDynamic("content/not-found.js",["angular2/angular2.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=function(){function a(){}return a=f([h.Component({selector:"not-found"}),h.View({template:"<h1>404 - Page not found</h1>"}),g("design:paramtypes",[])],a)}();return b.NotFound=i,d.define=e,c.exports}),System.registerDynamic("demo-app.js",["angular2/angular2.js","angular2/router.js","samples/sample.js","samples/samples.js","content/not-found.js"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=this&&this.__decorate||function(a,b,c,d){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(a,b,c,d);switch(arguments.length){case 2:return a.reduceRight(function(a,b){return b&&b(a)||a},b);case 3:return a.reduceRight(function(a,d){return void(d&&d(b,c))},void 0);case 4:return a.reduceRight(function(a,d){return d&&d(b,c,a)||a},d)}},g=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},h=a("angular2/angular2.js"),i=a("angular2/router.js"),j=a("samples/sample.js"),k=a("samples/samples.js"),l=a("content/not-found.js"),m=function(){function a(){}return a=f([h.Component({selector:"demo-app"}),i.RouteConfig([{path:"/",component:k.Samples,as:"Samples"},{path:"/sample/:name",component:j.Sample,as:"Sample"},{path:"/:whatever",component:l.NotFound,as:"NotFound"}]),h.View({template:'<div class="navbar navbar-inverse navbar-fixed-top" role=navigation><div class=container-fluid><div class=navbar-header><a class=navbar-brand [router-link]="[\'/Samples\']">Angular2-Bootstrap</a> <a class=navbar-brand [router-link]="[\'/Sample\', {name: \'carousel\'}]">Carousel</a> <a class=navbar-brand [router-link]="[\'/Sample\', {name: \'alert\'}]">Alert</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav navbar-right"><li><a href=https://github.com/mlaval/angular2-bootstrap>Github</a></li></ul></div></div></div><div class=container-fluid><div class=content><router-outlet></router-outlet></div></div>',directives:[i.RouterOutlet,i.RouterLink]}),g("design:paramtypes",[])],a)}();return b.DemoApp=m,h.bootstrap(m,[i.ROUTER_BINDINGS,h.bind(i.ROUTER_PRIMARY_COMPONENT).toValue(m),h.bind(i.LocationStrategy).toClass(i.HashLocationStrategy)]),d.define=e,c.exports});