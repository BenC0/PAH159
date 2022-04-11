import handle_interaction from "./cta_interaction"
import detect_cta_status from "./detect_cta_status"
import * as cta_html from "./cta.html"

export const pdp_add_to_basket = {
	cta_html,
	handle_interaction,
	detect_status: detect_cta_status,
}

export default pdp_add_to_basket