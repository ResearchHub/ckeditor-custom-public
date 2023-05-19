/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import AutoformatMathematics from "ckeditor5-math/src/autoformatmath";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave.js";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import BlockToolbar from "@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
//import DataFilter from '@ckeditor/ckeditor5-html-support/src/datafilter.js';
//import DataSchema from '@ckeditor/ckeditor5-html-support/src/dataschema.js';
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
//import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf.js';
//import ExportWord from '@ckeditor/ckeditor5-export-word/src/exportword.js';
//import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
//import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
//import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
//import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
//import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
//import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
//import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
import Mathematics from "ckeditor5-math/src/math";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
//import Mention from '@ckeditor/ckeditor5-mention/src/mention.js';
//import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";
//import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
//import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
//import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
//import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
//import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
//import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
//import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
//import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js';
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
//import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage.js';
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Title from "@ckeditor/ckeditor5-heading/src/title.js";
//import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
//import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

import RealTimeCollaborativeComments from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments.js";
import RealTimeCollaborativeEditing from "@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativeediting.js";
//import RealTimeCollaborativeTrackChanges from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativetrackchanges.js';

import ContextBase from "@ckeditor/ckeditor5-core/src/context";

// Context plugins:
//import CloudServicesCommentsAdapter from '@ckeditor/ckeditor5-real-time-collaboration/src/realtimecollaborativecomments/cloudservicescommentsadapter';
//import NarrowSidebar from '@ckeditor/ckeditor5-comments/src/annotations/narrowsidebar';
import PresenceList from "@ckeditor/ckeditor5-real-time-collaboration/src/presencelist.js";
//import WideSidebar from '@ckeditor/ckeditor5-comments/src/annotations/widesidebar';

// Jupyter plugins:
// import ProductPreviewEditing from "./productpreviewediting";
import EditorWatchdog from "@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js";

// Video
import Video from "@visao/ckeditor5-video/src/video";
import VideoUpload from "@visao/ckeditor5-video/src/videoupload";
import VideoResize from "@visao/ckeditor5-video/src/videoresize";
import VideoToolbar from "@visao/ckeditor5-video/src/videotoolbar";
import { generateApiUrl, POST_FILE_CONFIG } from "./api";

class VideoUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    const uploadVideo = async (file) => {
      this.loader.uploaded = false;
      const params = new FormData();
      params.append("upload", file);
      const res = await fetch(
        generateApiUrl("paper/discussion/file/"),
        POST_FILE_CONFIG(params)
      );
      const json = await res.json();

      this.loader.uploaded = true;

      return { default: json.url };
    };

    return this.loader.file.then((file) => uploadVideo(file));
  }

  abort() {
    return Promise.reject();
  }
}

function AddCkeVideoControls(editor) {
  editor.conversion.for("downcast").add((dispatcher) => {
    dispatcher.on(
      "insert:videoBlock",
      (evt, data, conversionApi) => {
        const viewWriter = conversionApi.writer;
        const figure = conversionApi.mapper.toViewElement(data.item);
        const video = figure.getChild(0);
        viewWriter.setAttribute("controls", true, video);
      },
      { priority: "low" }
    );
  });
}

class Context extends ContextBase {}

function VideoUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new VideoUploadAdapter(loader);
  };
}

// Plugins to include in the context.
Context.builtinPlugins = [
  //CloudServicesCommentsAdapter,
  //NarrowSidebar,
  PresenceList,
  //WideSidebar,
];

Context.defaultConfig = {
  // Configuration shared between editors:
  language: "en",
};

class CKEditorCS extends BalloonEditor {}
class SimpleEditor extends ClassicEditor {}
class SimpleBalloonEditor extends BalloonEditor {}

const EDITOR_PLUGINS = [
  Alignment,
  AutoImage,
  AutoLink,
  Autoformat,
  AutoformatMathematics,
  Autosave,
  BlockQuote,
  Bold,
  BlockToolbar,
  CloudServices,
  Code,
  CodeBlock,
  //DataFilter,
  //DataSchema,
  Essentials,
  //ExportPdf,
  //ExportWord,
  //FontBackgroundColor,
  //FontColor,
  //FontFamily,
  //FontSize,
  Heading,
  //Highlight,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  //IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListStyle,
  //Markdown,
  Mathematics,
  MediaEmbed,
  MediaEmbedToolbar,
  //Mention,
  //PageBreak,
  Paragraph,
  PasteFromOffice,
  // PresenceList,
  // ProductPreviewEditing,
  // RealTimeCollaborativeComments,
  //RealTimeCollaborativeTrackChanges,
  RemoveFormat,
  SimpleUploadAdapter,
  //SpecialCharacters,
  //SpecialCharactersArrows,
  //SpecialCharactersCurrency,
  //SpecialCharactersEssentials,
  //SpecialCharactersLatin,
  //SpecialCharactersMathematical,
  //SpecialCharactersText,
  //StandardEditingMode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  //TextPartLanguage,
  TextTransformation,
  Title,
  //TodoList,
  Underline,
  Video,
  VideoUpload,
  VideoResize,
  // VideoStyle,
  VideoToolbar,
  //WordCount
];

// Plugins to include in the build.
CKEditorCS.builtinPlugins = [
  ...EDITOR_PLUGINS,
  RealTimeCollaborativeEditing,
  PresenceList,
];

// Plugins to include in the build.
SimpleEditor.builtinPlugins = [
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  CloudServices,
  Code,
  CodeBlock,
  Essentials,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  Link,
  LinkImage,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SimpleUploadAdapter,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
];

// Plugins to include in the build.
SimpleBalloonEditor.builtinPlugins = [...EDITOR_PLUGINS];

// Editor configuration.
CKEditorCS.defaultConfig = {
  blockToolbar: [
    "heading",
    "|",
    "blockquote",
    "insertTable",
    "codeBlock",
    "math",
    "|",
    "numberedList",
    "bulletedList",
    "outdent",
    "indent",
    "|",
    "link",
    "imageUpload",
    "videoUpload",
    "|",
    "undo",
    "redo",
  ],
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "removeFormat",
      "|",
      "blockquote",
      "insertTable",
      "codeBlock",
      "math",
      "|",
      "numberedList",
      "bulletedList",
      "outdent",
      "indent",
      "|",
      "link",
      "imageUpload",
      "videoUpload",
    ],
    shouldNotGroupWhenFull: true,
  },
  math: {
    engine: "katex", // or katex or function. E.g. (equation, element, display) => { ... }
    lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
    outputType: "script", // or span
    forceOutputType: false, // forces output to use outputType
    enablePreview: true, // Enable preview view
    previewClassName: [], // Class names to add to previews
    popupClassName: [], // Class names to add to math popup balloon
  },
  mediaEmbed: {
    previewsInData: true,
  },
  extraPlugins: [VideoUploadAdapterPlugin, AddCkeVideoControls],
  video: {
    upload: {
      allowMultipleFiles: false,
    },
    styles: ["alignLeft", "alignCenter", "alignRight"],
    toolbar: [
      "videoResize",
      "|",
      "videoResize:50",
      "videoResize:75",
      "videoResize:original",
    ],
    resizeOptions: [
      {
        name: "videoResize:original",
        value: null,
        label: "Original",
        icon: "original",
      },
      {
        name: "videoResize:50",
        value: 50,
        label: "50",
        icon: "medium",
      },
      {
        name: "videoResize:75",
        value: "75",
        label: "75",
        icon: "large",
      },
    ],
  },
  image: {
    // Configure the available styles.
    styles: ["alignLeft", "alignCenter", "alignRight"],

    // Configure the available image resize options.
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Original",
        value: null,
      },
      {
        name: "resizeImage:75",
        label: "75%",
        value: "75",
      },
      {
        name: "resizeImage:50",
        label: "50%",
        value: "50",
      },
      {
        name: "resizeImage:25",
        label: "25%",
        value: "25",
      },
    ],

    toolbar: [
      "resizeImage",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "linkImage",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};

// Editor configuration.
SimpleEditor.defaultConfig = {
  ...CKEditorCS.defaultConfig,
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "removeFormat",
      "|",
      "blockquote",
      "insertTable",
      "codeBlock",
      "|",
      "numberedList",
      "bulletedList",
      "outdent",
      "indent",
      "|",
      "link",
      "imageUpload",
      "videoUpload",
      "mediaEmbed",
    ],
    shouldNotGroupWhenFull: true,
  },
};

// Editor configuration.
SimpleBalloonEditor.defaultConfig = {
  ...CKEditorCS.defaultConfig,
};

const BUNDLE_VERSION = require("../constants");

export default {
  BUNDLE_VERSION,
  Context,
  CKEditorCS,
  SimpleBalloonEditor,
  SimpleEditor,
  EditorWatchdog,
};
