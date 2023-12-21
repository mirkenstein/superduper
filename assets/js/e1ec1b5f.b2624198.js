"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5159],{32889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>B,default:()=>V,frontMatter:()=>S,metadata:()=>T,toc:()=>_});var n=r(85893),o=r(11151),s=r(67294),a=r(34334),i=r(72957),l=r(16550),c=r(81270),d=r(75238),u=r(33609),p=r(92560);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,d]=f({queryString:r,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=l??u;return b({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var v=r(51048);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==o&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>c.push(e),onKeyDown:p,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":o===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:o}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=g(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,n.jsx)(y,{...e,...t}),(0,n.jsx)(j,{...e,...t})]})}function D(e){const t=(0,v.Z)();return(0,n.jsx)(w,{...e,children:h(e.children)},String(t))}const k={tabItem:"tabItem_Ymn6"};function I(e){let{children:t,hidden:r,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(k.tabItem,o),hidden:r,children:t})}const S={slug:"introduce-vector-search-to-your-favourite-database-with-superduperdb",title:"Enable Vector Search in MongoDB with SuperDuperDB",authors:["blythed"],tags:["AI","vector-search"]},B=void 0,T={permalink:"/blog/introduce-vector-search-to-your-favourite-database-with-superduperdb",editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/blog/2023-09-09-vector-search.mdx",source:"@site/blog/2023-09-09-vector-search.mdx",title:"Enable Vector Search in MongoDB with SuperDuperDB",description:"_In this blog-post we show you how to easily operate vector-search in MongoDB",date:"2023-09-09T00:00:00.000Z",formattedDate:"September 9, 2023",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"vector-search",permalink:"/blog/tags/vector-search"}],readingTime:5.665,hasTruncateMarker:!0,authors:[{name:"Duncan Blythe",title:"CTO & Co-founder of SuperDuperDB",url:"https://github.com/blythed",imageURL:"https://avatars.githubusercontent.com/u/15139331?v=4",key:"blythed"}],frontMatter:{slug:"introduce-vector-search-to-your-favourite-database-with-superduperdb",title:"Enable Vector Search in MongoDB with SuperDuperDB",authors:["blythed"],tags:["AI","vector-search"]},unlisted:!1,prevItem:{title:"Building a Documentation Chatbot using FastAPI, React, MongoDB and SuperDuperDB",permalink:"/blog/building-a-documentation-chatbot-using-fastapi-react-mongodb-and-superduperdb"},nextItem:{title:"Introducing SuperDuperDB: Bringing AI to your Datastore in Python",permalink:"/blog/bringing-ai-to-your-datastore-in-python"}},A={authorsImageUrls:[void 0]},_=[{value:"Possibility 1: models live together with the database to create vectors at insertion time",id:"possibility-1-models-live-together-with-the-database-to-create-vectors-at-insertion-time",level:2},{value:"Possibility 2: the vector-database requires developers to provide their own vectors with their own models",id:"possibility-2-the-vector-database-requires-developers-to-provide-their-own-vectors-with-their-own-models",level:2},{value:"Enter SuperDuperDB",id:"enter-superduperdb",level:3},{value:"Minimal boilerplate to connect to SuperDuperDB",id:"minimal-boilerplate-to-connect-to-superduperdb",level:3},{value:"Set up vector-search with SuperDuperDB in one command!",id:"set-up-vector-search-with-superduperdb-in-one-command",level:3},{value:"Useful Links",id:"useful-links",level:3},{value:"Contributors are welcome!",id:"contributors-are-welcome",level:3},{value:"Become a Design Partner!",id:"become-a-design-partner",level:3}];function C(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"In this blog-post we show you how to easily operate vector-search in MongoDB\nAtlas using SuperDuperDB, leading to many savings and efficiencies in\nyour AI development."})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"In 2023 vector-databases are hugely popular; they provide the opportunity for developers to connect LLMs, such as OpenAI\u2019s GPT models, with their data, as well as providing the key to deploying \u201csearch-by-meaning\u201d on troves of documents."}),"\n",(0,n.jsx)(t.p,{children:"However: a key unanswered question, for which there is no widely accepted answer, is:"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"How do the vectors in my vector-database get there in the first place?"})}),"\n",(0,n.jsx)(t.p,{children:"Vectors (arrays of numbers used in vector-search) differ from the content of most databases, since they need to be calculated on the basis of other data."}),"\n",(0,n.jsx)(t.p,{children:"Currently there are 2 approaches:"}),"\n",(0,n.jsx)(t.h2,{id:"possibility-1-models-live-together-with-the-database-to-create-vectors-at-insertion-time",children:"Possibility 1: models live together with the database to create vectors at insertion time"}),"\n",(0,n.jsx)(t.p,{children:"When data is inserted into a vector-database, the database may be configured to \u201ccalculate\u201d or \u201ccompute\u201d vectors on the basis of this data (generally text). This means that the database environment also has access to some compute and AI models, or access to APIs such as OpenAI, in order to obtain vectors."}),"\n",(0,n.jsx)(t.p,{children:"Examples of this approach are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Weaviate"})," (support for a range of pre-defined models, some support for bringing own model)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Chroma"})," (support for OpenAI and sentence_transformers)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pros"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The data and compute live together, so developers don\u2019t need to create an additional app in order to use the vector-database"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Cons"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Developers are limited by the models available in the vector-database and the compute resources on the vector-database server"}),"\n",(0,n.jsx)(t.li,{children:"Primary data needs to be stored in the vector-database; classic-database + external vector-search isn\u2019t an expected pattern."}),"\n",(0,n.jsx)(t.li,{children:"Training of models is generally not supported."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"possibility-2-the-vector-database-requires-developers-to-provide-their-own-vectors-with-their-own-models",children:"Possibility 2: the vector-database requires developers to provide their own vectors with their own models"}),"\n",(0,n.jsx)(t.p,{children:"In this approach, developers are required to build an app which deploys model computations over data which is extracted from the datastore."}),"\n",(0,n.jsx)(t.p,{children:"Examples of this approach are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"LanceDB"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.em,{children:"Milvus"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Pros"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"By developing a vector-computation app, the user can use the full flexibility of the open-source landscape for computing these vectors, and can architect compute resources independently from vector-database resources"}),"\n",(0,n.jsx)(t.li,{children:"The vector-database \u201cspecializes\u201d in vector-search and storage of vectors, giving better performance guarantees as a result"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Cons"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Huge overhead of building one\u2019s own computation app."}),"\n",(0,n.jsx)(t.li,{children:"All communication between app, vector-database and datastore (if using external datastore) must be managed by the developer"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"enter-superduperdb",children:"Enter SuperDuperDB"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"SuperDuperDB is a middle path to scalability, flexiblity and ease-of-use in vector-search and far beyond."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"SuperDuperDB is an open-source Python environment which wraps databases and AI models with additional functionality to make them \u201cready\u201d to interface with one-another; developers are able to host their data in a \u201cclassical\u201d database, but use this database as a vector-database."}),"\n",(0,n.jsx)(t.li,{children:"SuperDuperDB allows users to integrate any model from the Python open source ecosystem (torch, sklearn, transformers, sentence_transformers as well as OpenAI\u2019s API), with their datastore. It uses a flexible scheme, allowing new frameworks and code-bases to be integrated without requiring the developer to add additional classes or functionality."}),"\n",(0,n.jsx)(t.li,{children:"SuperDuperDB can be co-located with the database in infrastructure, but at the same time has access to its own compute, which is scalable. This makes it vertically performant and at the same time, ready to scale horizontally to accommodate larger usage."}),"\n",(0,n.jsx)(t.li,{children:"SuperDuperDB enables training directly with the datastore: developers are only required to specify a database-query to initiate training on scalable compute."}),"\n",(0,n.jsx)(t.li,{children:"Developers are not required to program tricky boilerplate code or architectures for computing vector outputs and storing these back in the database. This is all supported natively by SuperDuperDB."}),"\n",(0,n.jsx)(t.li,{children:"SuperDuperDB supports data of arbitrary type: with its flexible serialization model, SuperDuperDB can handle text, images, tensors, audio and beyond."}),"\n",(0,n.jsx)(t.li,{children:"SuperDuperDB\u2019s scope goes far beyond vector-search; it supports models with arbitrary outputs: classification, generative AI, fore-casting and much more are all within scope and supported. This allows users to build interdependent models, where base models feed their outputs into downstream models; this enables transfer learning, and quality assurance via classification on generated outputs, to name but 2 key outcomes of SuperDuperDB\u2019s integration model."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"minimal-boilerplate-to-connect-to-superduperdb",children:"Minimal boilerplate to connect to SuperDuperDB"}),"\n",(0,n.jsx)(t.p,{children:"Connecting to MongoDB with SuperDuperDB is super easy. The connection may be used to insert documents, although insertion/ ingestion can also proceed via other sources/ client libraries."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import json\nimport pymongo\n\nfrom superduperdb import superduper\nfrom superduperdb.container.document import Document\nfrom superduperdb.db.mongodb.query import Collection\n\ndb = pymongo.MongoClient().documents\ndb = superduper(db)\n\ncollection = Collection('wikipedia')\n\nwith open('wikipedia.json') as f:\n    data = json.load(f)\n\ndb.execute(\n    collection.insert_many([Document(r) for r in data])\n)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"set-up-vector-search-with-superduperdb-in-one-command",children:"Set up vector-search with SuperDuperDB in one command!"}),"\n","\n","\n",(0,n.jsxs)(D,{children:[(0,n.jsx)(I,{value:"openai",label:"OpenAI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\nfrom superduperdb.ext.openai import OpenAIEmbedding\n\ndb.add(\n    VectorIndex(\n        identifier=f'wiki-index-openai',\n        indexing_listener=Listener(\n            model=OpenAIEmbedding(model='text-embedding-ada-002'),\n            key='abstract',\n            select=collection.find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        )\n    )\n)\n"})})}),(0,n.jsx)(I,{value:"st",label:"Sentence Transformers",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from superduperdb.container.vector_index import VectorIndex\nfrom superduperdb.container.listener import Listener\nfrom superduperdb.ext.numpy.array import array\nfrom sentence_transformers import Pipeline\n\nmodel = Model(\n    identifier='all-MiniLM-L6-v2',\n    object=sentence_transformers.SentenceTransformer('all-MiniLM-L6-v2'),\n    encoder=array('float32', shape=(384,)),\n    predict_method='encode',\n    batch_predict=True,\n)\n\ndb.add(\n    VectorIndex(\n        identifier=f'wiki-index-sentence-transformers',\n        indexing_listener=Listener(\n            model=model,\n            key='abstract',\n            select=collection.find(),\n            predict_kwargs={'max_chunk_size': 1000},\n        )\n    )\n)\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"This approach is simple enough to allow models from a vast range of libraries and sources to be implemented: open/ closed source, self-built or library based and much more."}),"\n",(0,n.jsx)(t.p,{children:"Now that the index has been created, queries may be dispatched in a new session to SuperDuperDB without reloading the model:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=10, vector_index=f'wiki-index')\n        .find({}, {'title': 1})\n)\n\nfor r in cur:\n    print(r)\n"})}),"\n",(0,n.jsx)(t.p,{children:"The great thing about using MongoDB or a similar battle tested database for vector-search, is that it can be easily combined with important filtering approaches. In this query, we restrict the results to a hard match involving the word \u201cAustralia\u201d:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"cur = db.execute(\n    collection\n        .like({'title': 'articles about sport'}, n=100, vector_index=f'wiki-index-{model.identifier}')\n        .find({'title': {'$regex': '.*Australia'}})\n)\n\nfor r in cur:\n    print(r['title'])\n"})}),"\n",(0,n.jsx)(t.h3,{id:"useful-links",children:"Useful Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://superduperdb.com/",children:"Website"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.superduperdb.com/docs/category/get-started",children:"Documentation"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.superduperdb.com/blog",children:"Blog"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.superduperdb.com/docs/category/use-cases",children:"Example Use Cases & Apps"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA",children:"Slack Community"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/superduperdb/",children:"LinkedIn"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://twitter.com/superduperdb",children:"Twitter"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://www.youtube.com/@superduperdb",children:"Youtube"})})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contributors-are-welcome",children:"Contributors are welcome!"}),"\n",(0,n.jsxs)(t.p,{children:["SuperDuperDB is open-source and permissively licensed under the ",(0,n.jsx)(t.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/LICENSE",children:"Apache 2.0 license"}),". We would like to encourage developers interested in open-source development to contribute in our discussion forums, issue boards and by making their own pull requests. We'll see you on ",(0,n.jsx)(t.a,{href:"https://github.com/SuperDuperDB/superduperdb",children:"GitHub"}),"!"]}),"\n",(0,n.jsx)(t.h3,{id:"become-a-design-partner",children:"Become a Design Partner!"}),"\n",(0,n.jsxs)(t.p,{children:["We are looking for visionary organizations which we can help to identify and implement transformative AI applications for their business and products. We're offering this absolutely for free. If you would like to learn more about this opportunity please reach out to us via email: ",(0,n.jsx)(t.a,{href:"mailto:partnerships@superduperdb.com",children:"partnerships@superduperdb.com"})]})]})}function V(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(C,{...e})}):C(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);