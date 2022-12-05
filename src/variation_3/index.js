import variationCSS from "./index.css";
import { elementManagement, log, track, init, config } from "../norman/index.js"
import pdp_add_to_basket from "../pdp_add_to_basket/index"
import detect_page from "../detect_page"
import { is_in_list } from "../subscribe/init";
import { checkout_is_valid, make_selection, update_summary } from "../checkout_delivery_preselection"
import { basket_is_valid, basket_delivery_messaging } from "../basket_delivery_messaging"

function actions() {
    log({
        "Variation": this.name,
        "Page Type": this.page_type
    })
    let cd = config.tracking.google_analytics.dimension[this.page_type]
    track(`${this.name} ${this.page_type} loaded`, `${this.page_type} loaded`, true, cd)
    track(`${this.name} ${this.page_type} loaded`, `${this.page_type} loaded`, false)
    
    if(this.page_type == "pdp") {
        log("Running PDP Changes")
        pdp_add_to_basket.add_cta()
    } else if (this.page_type == "basket") {
        log("Running Basket Changes")
        basket_delivery_messaging()
    } else if (this.page_type == "checkout") {
        log("Running Checkout Changes")
        make_selection("delivery")
    }
}

const Variant = {
    name: "Variation 3",
    css: variationCSS,
    page_type: detect_page(),
    conditions: () => {
        let conditions = []
        let page = detect_page()
        if(page == "pdp") {
            conditions.push(pdp_add_to_basket.isValid())
            conditions.push(!is_in_list())
        } else if (page == "basket") {
            conditions.push(basket_is_valid())
        } else if (page == "checkout") {
            conditions.push(checkout_is_valid())
        } else {
            conditions.push(false)
        }
        log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        log({message: `Polling: Result`, result})
        return result
    },
    actions,
    fallback: _ => {
        let page = detect_page()
        if(page !== "") {
            let cd = config.tracking.google_analytics.dimension[page]
            page == "pdp" ? "PDP" : `${page.charAt(0).toUpperCase()}${page.slice(1).toLowerCase()}`
            log(`Firing event to cd ${cd}: "${Variant.name} ${page} Not loaded"`)
            track(`${Variant.name} ${page} Not loaded`, `${page} Not loaded`, true, cd)
            track(`${Variant.name} ${page} Not loaded`, `${page} Not loaded`, false)
        }
    }
}

let nVariant = init(Variant)
nVariant.run()