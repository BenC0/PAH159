export function is_in_list() {
    let db = ["18352", "18354", "18357", "18360", "18361", "18362", "18364", "18366", "19620", "20964", "20988", "20989", "20990", "22418", "22420", "22421", "22422", "22423", "32291", "32292", "32293", "32294", "32295", "33881", "33882", "37973", "7104775", "7104776", "7104779", "7104780", "7120049", "7120050", "7120051", "7120052", "7120053", "7121667", "7121668", "7121669", "7121670", "7121671", "7121672", "7121673", "7121674", "7121675", "7121676", "7121883", "7121884", "7121885", "7121886", "7121887", "7125619", "7125620", "7125621", "7125622", "7125623", "7129998", "7131981", "7131982", "7131983", "7134143", "7134144", "7134145", "7134740", "7134741", "7134742", "7134744", "7134745", "7134913", "7134914", "7134915", "7136697", "7136698", "7136699", "7136700", "7136703", "7136704", "7136705", "7136706", "7136709", "7136710", "7136712", "7136714", "7136715", "7139528", "7139529", "7139530", "7139531", "7139532", "2665", "2674", "2675", "6081", "8365", "8366", "8367", "13534", "13535", "15344", "17805", "23794", "7109030", "7112992", "7112994", "7120054", "7120055", "7120109", "7122767", "7124850", "7124851", "3483", "5300", "6889", "11705", "11706", "11707", "11708", "11709", "11714", "11715", "11723", "11724", "11725", "12246", "15321", "15323", "19288", "19289", "24240", "24241", "24980", "24981", "24983", "29982", "30360", "33490", "33492", "33494", "33496", "36330", "7103512", "7103513", "7109807", "7109981", "7110294", "7110984", "7113018", "7113019", "7113020", "7113021", "7113634", "7114529", "7118333", "7120967", "7121955", "7121956", "7121957", "7121958", "7123631", "7123851", "7126479", "7126480", "7126481", "7126482", "7127080", "7127113", "7127115", "7127116", "7127117", "7127119", "7127120", "7127121", "7127129", "7127135", "7129285", "7129618", "7131148", "7131149", "7131150", "7131151", "7131386", "7131533", "7131990", "7131991", "7131992", "7133488", "7134250", "7134251", "7134926", "7134927", "7135510", "7135511", "7138511", "7139466", "7139467", "7139824", "7139825", "7139826", "7139827", "7139872", "7141997", "7142042", "7142043", "7142044", "7142045", "7142046", "7142401", "7142402", "7142403", "7142404", "7142405", "7142407", "7142408", "7142410", "7142411", "7142412", "7142413", "7142414", "7142415", "7142479", "7142480"]
    let keywords = document.querySelectorAll('meta[name="keyword"][content]')
    let possible_skus = [document.querySelector('.pdp-accordion__content-partNumber').textContent.replace(/P/g, "")]
    keywords.forEach(kw => {
        kw.getAttribute('content').split(",").forEach(a => {
            if (a.match(/[0-9][0-9]/)) {
                possible_skus.push(a)
            }
        })
    })
    return possible_skus.filter(sku => db.indexOf(sku) !== -1).length !== 0
}

export const subscribe = {
    is_in_list
}

export default subscribe