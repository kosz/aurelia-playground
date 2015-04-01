import {Behavior} from 'aurelia-templating'
import {AiElement} from './ai-element'
import {Toolbar}   from './toolbar'
import {ActivatorService} from './activator-service';

export {AiToolbarAttachedBehavior} from './ai-toolbar-attribute'
var defaults =  [ 'size' , 'fixed' , 'bgColor' , 'textColor' , 'brand' ]

export class AiToolbar extends Toolbar{

    static metadata(){
        return Behavior
            .customElement('ai-toolbar')
            .withProperty('router')
            .withProperty('fixed')
            .withProperty('brand', 'brandChanged')
            .withProperty('bgColor', 'bgChanged')
            .withProperty('textColor', 'textChanged')
            .withProperty('size', 'sizeChanged')
            .withProperty('toolbar', 'toolbarChanged')
            .withProperty('multi-menu')
    }

    static inject(){
        return [Element, ActivatorService]
    }

    constructor(element, activator){
        var _this = this;
        this.current  = {}
        this.element  = element
        this.activator = activator
        this.splitter = this.splitter  = /\s*,\s*/;

        _.assign(this.current, this.defaults);

        for(let prop in defaults){
            this.activator.activateProperty(`ai-toolbar-${prop}`     , this, prop)
        }

        this.element.classList.add('ai-toolbar')
    }

    bind(){
        this.parent = this.element.parentElement;
    }

    bgChanged(value){
        value = value.split(this.splitter)
        console.log(value)
        this.element.classList.remove.apply(this.element.classList, this.current.bgColor)
        this.element.classList.add.apply(this.element.classList, value);
        this.current.bgColor = value
    }

    textChanged(value){
        value = value.split(this.splitter)
        this.element.classList.remove.apply(this.element.classList, this.current.textColor)
        this.element.classList.add.apply(this.element.classList, value);
        this.current.textColor = value
    }
    sizeChanged(value){

        this.parent.classList.remove(`header-${this.current.size}`)
        this.parent.classList.add(`header-${value}`)
        this.element.classList.remove(`toolbar-${this.current.size}`)
        this.element.classList.add(`toolbar-${value}`)
        this.current.size = value
    }

}


class ToolbarContainer extends AiElement{

    constructor(...args){
        this.element = args[0]
    }
}

