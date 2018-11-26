function GetJson(func) {
    try {
        return eval(func);
    } catch (e) {
        return {};
    }
}

function MergePresets(babelConfigRaw = {}, preset = '') {
    const babelConfig = GetJson(babelConfigRaw);
    if (babelConfig.presets) {
        if (!babelConfig.presets.includes(preset)) {
            babelConfig.presets.push(preset);
        }
    } else {
        babelConfig.presets = [preset];
    }
    return `module.exports = ${JSON.stringify(babelConfig)}`;
}

module.exports = {
    MergePresets,
    GetJson
};