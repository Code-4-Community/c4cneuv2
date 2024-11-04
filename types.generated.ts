// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About-CDE documents
 */
interface AboutDocumentData {
	/**
	 * cde-title field in *About-CDE*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Lorem
	 * - **API ID Path**: about.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * image field in *About-CDE*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.cd-image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	"cd-image": prismic.ImageField<never>;
	
	/**
	 * description field in *About-CDE*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.
	 * - **API ID Path**: about.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * About-CDE document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *About-CDE → events*
 */
export interface AboutCdeDocumentDataEventsItem {
	/**
	 * image field in *About-CDE → events*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about-cde.events[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * title field in *About-CDE → events*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Lorem
	 * - **API ID Path**: about-cde.events[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * description field in *About-CDE → events*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.
	 * - **API ID Path**: about-cde.events[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Content for About-CDE documents
 */
interface AboutCdeDocumentData {
	/**
	 * events field in *About-CDE*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about-cde.events[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	events: prismic.GroupField<Simplify<AboutCdeDocumentDataEventsItem>>;
}

/**
 * About-CDE document from Prismic
 *
 * - **API ID**: `about-cde`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutCdeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<AboutCdeDocumentData>, "about-cde", Lang>;

/**
 * Item in *About-PDE → events*
 */
export interface AboutPdeDocumentDataEventsItem {
	/**
	 * pde-title field in *About-PDE → events*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Lorem
	 * - **API ID Path**: about-pde.events[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;
	
	/**
	 * image field in *About-PDE → events*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about-pde.events[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * description field in *About-PDE → events*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Lorem ipsum dolor sit amet consectetur. Elementum nisl proin volutpat non purus.
	 * - **API ID Path**: about-pde.events[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Content for About-PDE documents
 */
interface AboutPdeDocumentData {
	/**
	 * events field in *About-PDE*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about-pde.events[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	events: prismic.GroupField<Simplify<AboutPdeDocumentDataEventsItem>>;
}

/**
 * About-PDE document from Prismic
 *
 * - **API ID**: `about-pde`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutPdeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<AboutPdeDocumentData>, "about-pde", Lang>;

/**
 * Content for event documents
 */
interface EventDocumentData {
	/**
	 * adssa field in *event*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: event.adssa
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	adssa: prismic.TitleField;
}

/**
 * event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<EventDocumentData>, "event", Lang>;

/**
 * Item in *People → people*
 */
export interface PeopleDocumentDataPeopleItem {
	/**
	 * headshot field in *People → people*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].headshot
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	headshot: prismic.ImageField<never>;
	
	/**
	 * name field in *People → people*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].name
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	name: prismic.TitleField;
	
	/**
	 * role field in *People → people*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].role
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	role: prismic.RichTextField;
	
	/**
	 * email field in *People → people*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].email
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	email: prismic.RichTextField;
	
	/**
	 * github field in *People → people*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].github
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	github: prismic.EmbedField
	
	/**
	 * linkedin field in *People → people*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].linkedin
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	linkedin: prismic.EmbedField
	
	/**
	 * website field in *People → people*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[].website
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	website: prismic.EmbedField
}

/**
 * Content for People documents
 */
interface PeopleDocumentData {
	/**
	 * people field in *People*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: people.people[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	people: prismic.GroupField<Simplify<PeopleDocumentDataPeopleItem>>;
}

/**
 * People document from Prismic
 *
 * - **API ID**: `people`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PeopleDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<PeopleDocumentData>, "people", Lang>;

/**
 * Content for Person documents
 */
interface PersonDocumentData {
	/**
	 * Headshot field in *Person*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: person.headshot
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	headshot: prismic.ImageField<never>;
	
	/**
	 * Name field in *Person*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: person.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	name: prismic.TitleField;
	
	/**
	 * role field in *Person*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: person.role
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	role: prismic.TitleField;
	
	/**
	 * github field in *Person*
	 *
	 * - **Field Type**: Embed
	 * - **Placeholder**: *None*
	 * - **API ID Path**: person.github
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#embed
	 */
	github: prismic.EmbedField
}

/**
 * Person document from Prismic
 *
 * - **API ID**: `person`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PersonDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<PersonDocumentData>, "person", Lang>;

interface ProjectDocumentData {}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<ProjectDocumentData>, "project", Lang>;

export type AllDocumentTypes = AboutDocument | AboutCdeDocument | AboutPdeDocument | EventDocument | PeopleDocument | PersonDocument | ProjectDocument;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			AboutDocument,
			AboutDocumentData,
			AboutCdeDocument,
			AboutCdeDocumentData,
			AboutCdeDocumentDataEventsItem,
			AboutPdeDocument,
			AboutPdeDocumentData,
			AboutPdeDocumentDataEventsItem,
			EventDocument,
			EventDocumentData,
			PeopleDocument,
			PeopleDocumentData,
			PeopleDocumentDataPeopleItem,
			PersonDocument,
			PersonDocumentData,
			ProjectDocument,
			ProjectDocumentData,
			AllDocumentTypes
		}
	}
}