import variationCSS from "./index.css";
import { elementManagement, log, track, init } from "../norman/index.js"
import pdp_add_to_basket from "../pdp_add_to_basket/index"

function actions() {
    log(this.name)
    track(this.name, "Loaded", true)
    let status = pdp_add_to_basket.detect_status()
    let target_selectors = [
        status.elements.easyRepeat.parentSelector,
        status.elements.oneTimePurchase.parentSelector,
        status.elements.oneTimePurchaseEasyRepeatModule.parentSelector,
    ]
    let targets = elementManagement.getAll(target_selectors)
    log({targets, cta_html: pdp_add_to_basket.cta_html})
    targets.forEach(target => {
        let el = elementManagement.add(pdp_add_to_basket.cta_html, "afterBegin", target)
        el.addEventListener("click", e => {
            pdp_add_to_basket.handle_interaction("delivery")
        })
        log({target, el})
    })
}

const Variant = {
    name: "Variation 1",
    css: variationCSS,
    conditions: () => {
        let conditions = []
        conditions.push(pdp_add_to_basket.isValid())
        log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        log({message: `Polling: Result`, result})
        return result
    },
    actions,
}

let nVariant = init(Variant)
nVariant.run()