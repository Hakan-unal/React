export type WebObjType = {
    title: string;
    description: string;
    link: string;
    code: string | null;
}

export type MobileObjType = {
    title: string;
    description: string;
    link: string;
    code: string | null;
    image:string
}

export type SkillObjType = {
    name: string;
    rate: number;
}


export type ProjectObjType = {
    title: string;
    description: string;
    link: string | null;
}

export type CertificateObjType = {
    title: string;
    link: string;
}

export type ComponentObjType = {
    title: string;
    description: string;
    link: string;
    code: string;
}

export type ArticleObjType = {
    title: string;
    link: string;
}

export type StatisticObjType = {
    name: string;
    length: number;
    url:string;
}

export type NpmObjType = {
    title: string;
    link: string;
    code: string;
}