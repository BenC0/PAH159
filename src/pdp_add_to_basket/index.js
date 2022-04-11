import handle_interaction from "./cta_interaction.js"
import detect_cta_status from "./detect_cta_status.js"
import cta_html from "./cta.html"

export const pdp_add_to_basket = {
	cta_html,
	handle_interaction,
	detect_status: detect_cta_status,
	isValid: () => {
		let status = detect_cta_status()
		return [
			status.easyRepeat.cnc,
			status.oneTimePurchase.cnc,
			status.oneTimePurchaseEasyRepeatModule.cnc,
			status.easyRepeat.delivery,
			status.oneTimePurchase.delivery,
			status.oneTimePurchaseEasyRepeatModule.delivery,
		].some(a => a)
	}
}

export default pdp_add_to_basket