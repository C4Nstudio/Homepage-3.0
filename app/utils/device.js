// CSS媒体查询宽度列表

const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptopS: 1024,
    laptopM: 1440,
    laptopL: 1920,
    desktop: 2560
}

const device = Object.keys(size).reduce((acc, cur) => {
    acc[cur] = `(min-width: ${size[cur]}px)`;
    return acc;
}, {});

export default device;