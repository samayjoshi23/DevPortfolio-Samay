export interface Project{
    id: number,
    title: string | undefined,
    description: string,
    dir: string,
    images: string[],
    stack: string[],
    thumb: string | null
}


export interface Skill {
    title: string,
    description: string,
}