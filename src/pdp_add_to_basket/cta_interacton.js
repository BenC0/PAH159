import { elementManagement, log } from "../norman"
import detect_cta_status from "./detect_cta_status"

export default function handle_interaction(preference = "delivery", type="oneTimePurchase") {
    let status = detect_cta_status()
    let type_availability = status[type]
    let preference_is_available = type_availability[preference]
    log(preference_is_available)
    if(!preference_is_available) {
        log({
            error: "Preference isn't available, defaulting to alternate method",
            status
        })
        preference = preference == "delivery" ? "cnc" : preference ==  "cnc" ? "delivery" : "delivery"
        preference_is_available = type_availability[preference]
    }
    if(!preference_is_available) {
        log({
            error: "methods aren't available.",
            status
        })
        return false
    }
    let preference_selector_property_name = preference == "delivery" ? "deliverySelector" : "clickAndCollectSelector"
    let original_cta_selector = status["elements"][preference_selector_property_name]
    let original_cta = elementManagement.get(original_cta_selector).pop(0)
    original_cta.click()
}