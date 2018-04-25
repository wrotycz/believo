export interface HateoasPagedArray<T extends HateoasEntity> extends HateoasEntity {
  _embedded: { [name: string]: T[] };
  page: HateoasPageProps;
}

export interface HateoasEntity {
  _links: { [name: string]: HateoasLink };
}

export interface HateoasLink {
  href: string;
  templated?: boolean;
}

export interface HateoasPageProps {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
