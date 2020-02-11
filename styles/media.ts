export enum Sizes {
    mobileS = 320,
    mobileM = 375,
    mobileL = 425,
    tablet = 768,
    laptop = 1024,

    laptopM = 1280,
    laptopL = 1440,
    desktop = 1920,
}

export class Queries {
    public static readonly mobileS = Queries.custom(Sizes.mobileS);
    public static readonly mobileM = Queries.custom(Sizes.mobileM);
    public static readonly mobileL = Queries.custom(Sizes.mobileL);
    public static readonly tablet = Queries.custom(Sizes.tablet);
    public static readonly laptop = Queries.custom(Sizes.laptop);
    public static readonly laptopM = Queries.custom(Sizes.laptopM);
    public static readonly laptopL = Queries.custom(Sizes.laptopL);
    public static readonly desktop = Queries.custom(Sizes.desktop);

    public static custom(minWidth: number) {
        return `@media (min-width: ${minWidth}px)`;
    }
    private constructor() {}
}

export default Queries;
