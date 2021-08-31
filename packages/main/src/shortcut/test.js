var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/list-files-in-dir/lib/index.js
var require_lib = __commonJS({
  "node_modules/list-files-in-dir/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fs_1 = require("fs");
    var path_1 = require("path");
    function readDirectory(directory) {
      return new Promise(function(resolve, reject) {
        fs_1.readdir(directory, function(err, files) {
          if (err)
            return reject(err);
          resolve(files.map(function(file) {
            return path_1.resolve(directory, file);
          }));
        });
      });
    }
    function statistics(path2) {
      return new Promise(function(resolve, reject) {
        fs_1.stat(path2, function(err, statistics2) {
          if (err)
            return reject(err);
          resolve(statistics2);
        });
      });
    }
    function matchesExtension(file, extension) {
      if (typeof extension === "string") {
        if (file.endsWith(extension))
          return file;
      } else if (extension instanceof RegExp) {
        if (file.match(extension))
          return file;
      } else {
        throw new Error("Extension must be a string or a regular expression!");
      }
    }
    function listFiles(directory, extension) {
      if (typeof extension === "string" && !extension.startsWith("."))
        extension = "." + extension;
      return readDirectory(directory).then(function(files) {
        return Promise.all(files.map(function(file) {
          return statistics(file).then(function(stats) {
            if (stats.isDirectory())
              return listFiles(file, extension);
            if (!extension || extension && matchesExtension(file, extension))
              return file;
          });
        }));
      }).then(function(files) {
        return Array.prototype.concat.apply([], files).filter(function(file) {
          return !!file;
        });
      });
    }
    exports2.listFiles = listFiles;
    function listFilesSync(directory, extension, files) {
      if (files === void 0) {
        files = [];
      }
      if (typeof extension === "string" && !extension.startsWith("."))
        extension = "." + extension;
      for (var _i = 0, _a = fs_1.readdirSync(directory); _i < _a.length; _i++) {
        var file = _a[_i];
        file = path_1.resolve(directory, file);
        if (fs_1.statSync(file).isDirectory()) {
          files = listFilesSync(file, extension, files);
        } else if (!extension || extension && matchesExtension(file, extension)) {
          files.push(file);
        }
      }
      return files;
    }
    exports2.listFilesSync = listFilesSync;
  }
});

// packages/main/src/shortcut/win32/lnk/common.ts
var require_common = __commonJS({
  "packages/main/src/shortcut/win32/lnk/common.ts"(exports2, module2) {
    "use strict";
    module2.exports = {
      header: {
        size: 76,
        linkCLSID: "00021401-0000-0000-c000-000000000046"
      },
      showCommand: {
        normal: 1,
        maximized: 3,
        minNoActive: 7,
        minimized: 7
      },
      fileAttributes: {
        directory: 16,
        file: 128
      },
      flags: {
        hasLinkTargetIDList: 1 << 0,
        hasLinkInfo: 1 << 1,
        hasName: 1 << 2,
        hasRelativePath: 1 << 3,
        hasWorkingDir: 1 << 4,
        hasArguments: 1 << 5,
        hasIconLocation: 1 << 6,
        isUnicode: 1 << 7,
        forceNoLinkInfo: 1 << 8,
        hasExpString: 1 << 9,
        runInSeparateProcess: 1 << 10,
        unused1: 1 << 11,
        hasDarwinID: 1 << 12,
        runAsUser: 1 << 13,
        hasExpIcon: 1 << 14,
        noPidlAlias: 1 << 15,
        unused2: 1 << 16,
        runWithShimLayer: 1 << 17,
        forceNoLinkTrack: 1 << 18,
        enableTargetMetadata: 1 << 19,
        disableLinkPathTracking: 1 << 20,
        disableKnownFolderTracking: 1 << 21,
        disableKnownFolderAlias: 1 << 22,
        allowLinkToLink: 1 << 23,
        unaliasOnSave: 1 << 24,
        preferEnvironmentPath: 1 << 25,
        keepLocalIDListForUNCTarget: 1 << 26
      },
      itemIDTypes: {
        fileOld: 54,
        54: "fileOld",
        directoryOld: 53,
        53: "directoryOld",
        file: 50,
        50: "file",
        directory: 49,
        49: "directory",
        driveOld: 35,
        35: "driveOld",
        drive: 47,
        47: "drive",
        clsid: 31,
        31: "clsid"
      },
      clsids: {
        "20d04fe0-3aea-1069-a2d8-08002b30309d": "MyComputer",
        "MyComputer": "20d04fe0-3aea-1069-a2d8-08002b30309d"
      },
      knownFolders: {
        "AccountPictures": "008ca0b1-55b4-4c56-b8a8-4de4b299d3be",
        "008ca0b1-55b4-4c56-b8a8-4de4b299d3be": "AccountPictures",
        "AddNewPrograms": "de61d971-5ebc-4f02-a3a9-6c82895e5c04",
        "de61d971-5ebc-4f02-a3a9-6c82895e5c04": "AddNewPrograms",
        "AdminTools": "724ef170-a42d-4fef-9f26-b60e846fba4f",
        "724ef170-a42d-4fef-9f26-b60e846fba4f": "AdminTools",
        "AppDataDesktop": "b2c5e279-7add-439f-b28c-c41fe1bbf672",
        "b2c5e279-7add-439f-b28c-c41fe1bbf672": "AppDataDesktop",
        "AppDataDocuments": "7be16610-1f7f-44ac-bff0-83e15f2ffca1",
        "7be16610-1f7f-44ac-bff0-83e15f2ffca1": "AppDataDocuments",
        "AppDataFavorites": "7cfbefbc-de1f-45aa-b843-a542ac536cc9",
        "7cfbefbc-de1f-45aa-b843-a542ac536cc9": "AppDataFavorites",
        "AppDataProgramData": "559d40a3-a036-40fa-af61-84cb430a4d34",
        "559d40a3-a036-40fa-af61-84cb430a4d34": "AppDataProgramData",
        "ApplicationShortcuts": "a3918781-e5f2-4890-b3d9-a7e54332328c",
        "a3918781-e5f2-4890-b3d9-a7e54332328c": "ApplicationShortcuts",
        "AppsFolder": "1e87508d-89c2-42f0-8a7e-645a0f50ca58",
        "1e87508d-89c2-42f0-8a7e-645a0f50ca58": "AppsFolder",
        "AppUpdates": "a305ce99-f527-492b-8b1a-7e76fa98d6e4",
        "a305ce99-f527-492b-8b1a-7e76fa98d6e4": "AppUpdates",
        "CameraRoll": "ab5fb87b-7ce2-4f83-915d-550846c9537b",
        "ab5fb87b-7ce2-4f83-915d-550846c9537b": "CameraRoll",
        "CDBurning": "9e52ab10-f80d-49df-acb8-4330f5687855",
        "9e52ab10-f80d-49df-acb8-4330f5687855": "CDBurning",
        "ChangeRemovePrograms": "df7266ac-9274-4867-8d55-3bd661de872d",
        "df7266ac-9274-4867-8d55-3bd661de872d": "ChangeRemovePrograms",
        "CommonAdminTools": "d0384e7d-bac3-4797-8f14-cba229b392b5",
        "d0384e7d-bac3-4797-8f14-cba229b392b5": "CommonAdminTools",
        "CommonOEMLinks": "c1bae2d0-10df-4334-bedd-7aa20b227a9d",
        "c1bae2d0-10df-4334-bedd-7aa20b227a9d": "CommonOEMLinks",
        "CommonPrograms": "0139d44e-6afe-49f2-8690-3dafcae6ffb8",
        "0139d44e-6afe-49f2-8690-3dafcae6ffb8": "CommonPrograms",
        "CommonStartMenu": "a4115719-d62e-491d-aa7c-e74b8be3b067",
        "a4115719-d62e-491d-aa7c-e74b8be3b067": "CommonStartMenu",
        "CommonStartup": "82a5ea35-d9cd-47c5-9629-e15d2f714e6e",
        "82a5ea35-d9cd-47c5-9629-e15d2f714e6e": "CommonStartup",
        "CommonTemplates": "b94237e7-57ac-4347-9151-b08c6c32d1f7",
        "b94237e7-57ac-4347-9151-b08c6c32d1f7": "CommonTemplates",
        "ComputerFolder": "0ac0837c-bbf8-452a-850d-79d08e667ca7",
        "0ac0837c-bbf8-452a-850d-79d08e667ca7": "ComputerFolder",
        "ConflictFolder": "4bfefb45-347d-4006-a5be-ac0cb0567192",
        "4bfefb45-347d-4006-a5be-ac0cb0567192": "ConflictFolder",
        "ConnectionsFolder": "6f0cd92b-2e97-45d1-88ff-b0d186b8dedd",
        "6f0cd92b-2e97-45d1-88ff-b0d186b8dedd": "ConnectionsFolder",
        "Contacts": "56784854-c6cb-462b-8169-88e350acb882",
        "56784854-c6cb-462b-8169-88e350acb882": "Contacts",
        "ControlPanelFolder": "82a74aeb-aeb4-465c-a014-d097ee346d63",
        "82a74aeb-aeb4-465c-a014-d097ee346d63": "ControlPanelFolder",
        "Cookies": "2b0f765d-c0e9-4171-908e-08a611b84ff6",
        "2b0f765d-c0e9-4171-908e-08a611b84ff6": "Cookies",
        "Desktop": "b4bfcc3a-db2c-424c-b029-7fe99a87c641",
        "b4bfcc3a-db2c-424c-b029-7fe99a87c641": "Desktop",
        "DeviceMetadataStore": "5ce4a5e9-e4eb-479d-b89f-130c02886155",
        "5ce4a5e9-e4eb-479d-b89f-130c02886155": "DeviceMetadataStore",
        "Documents": "fdd39ad0-238f-46af-adb4-6c85480369c7",
        "fdd39ad0-238f-46af-adb4-6c85480369c7": "Documents",
        "DocumentsLibrary": "7b0db17d-9cd2-4a93-9733-46cc89022e7c",
        "7b0db17d-9cd2-4a93-9733-46cc89022e7c": "DocumentsLibrary",
        "Downloads": "374de290-123f-4565-9164-39c4925e467b",
        "374de290-123f-4565-9164-39c4925e467b": "Downloads",
        "Favorites": "1777f761-68ad-4d8a-87bd-30b759fa33dd",
        "1777f761-68ad-4d8a-87bd-30b759fa33dd": "Favorites",
        "Fonts": "fd228cb7-ae11-4ae3-864c-16f3910ab8fe",
        "fd228cb7-ae11-4ae3-864c-16f3910ab8fe": "Fonts",
        "Games": "cac52c1a-b53d-4edc-92d7-6b2e8ac19434",
        "cac52c1a-b53d-4edc-92d7-6b2e8ac19434": "Games",
        "GameTasks": "054fae61-4dd8-4787-80b6-090220c4b700",
        "054fae61-4dd8-4787-80b6-090220c4b700": "GameTasks",
        "History": "d9dc8a3b-b784-432e-a781-5a1130a75963",
        "d9dc8a3b-b784-432e-a781-5a1130a75963": "History",
        "HomeGroup": "52528a6b-b9e3-4add-b60d-588c2dba842d",
        "52528a6b-b9e3-4add-b60d-588c2dba842d": "HomeGroup",
        "HomeGroupCurrentUser": "9b74b6a3-0dfd-4f11-9e78-5f7800f2e772",
        "9b74b6a3-0dfd-4f11-9e78-5f7800f2e772": "HomeGroupCurrentUser",
        "ImplicitAppShortcuts": "bcb5256f-79f6-4cee-b725-dc34e402fd46",
        "bcb5256f-79f6-4cee-b725-dc34e402fd46": "ImplicitAppShortcuts",
        "InternetCache": "352481e8-33be-4251-ba85-6007caedcf9d",
        "352481e8-33be-4251-ba85-6007caedcf9d": "InternetCache",
        "InternetFolder": "4d9f7874-4e0c-4904-967b-40b0d20c3e4b",
        "4d9f7874-4e0c-4904-967b-40b0d20c3e4b": "InternetFolder",
        "Libraries": "1b3ea5dc-b587-4786-b4ef-bd1dc332aeae",
        "1b3ea5dc-b587-4786-b4ef-bd1dc332aeae": "Libraries",
        "Links": "bfb9d5e0-c6a9-404c-b2b2-ae6db6af4968",
        "bfb9d5e0-c6a9-404c-b2b2-ae6db6af4968": "Links",
        "LocalAppData": "f1b32785-6fba-4fcf-9d55-7b8e7f157091",
        "f1b32785-6fba-4fcf-9d55-7b8e7f157091": "LocalAppData",
        "LocalAppDataLow": "a520a1a4-1780-4ff6-bd18-167343c5af16",
        "a520a1a4-1780-4ff6-bd18-167343c5af16": "LocalAppDataLow",
        "LocalizedResourcesDir": "2a00375e-224c-49de-b8d1-440df7ef3ddc",
        "2a00375e-224c-49de-b8d1-440df7ef3ddc": "LocalizedResourcesDir",
        "Music": "4bd8d571-6d19-48d3-be97-422220080e43",
        "4bd8d571-6d19-48d3-be97-422220080e43": "Music",
        "MusicLibrary": "2112ab0a-c86a-4ffe-a368-0de96e47012e",
        "2112ab0a-c86a-4ffe-a368-0de96e47012e": "MusicLibrary",
        "NetHood": "c5abbf53-e17f-4121-8900-86626fc2c973",
        "c5abbf53-e17f-4121-8900-86626fc2c973": "NetHood",
        "NetworkFolder": "d20beec4-5ca8-4905-ae3b-bf251ea09b53",
        "d20beec4-5ca8-4905-ae3b-bf251ea09b53": "NetworkFolder",
        "Objects3D": "31c0dd25-9439-4f12-bf41-7ff4eda38722",
        "31c0dd25-9439-4f12-bf41-7ff4eda38722": "Objects3D",
        "OriginalImages": "2c36c0aa-5812-4b87-bfd0-4cd0dfb19b39",
        "2c36c0aa-5812-4b87-bfd0-4cd0dfb19b39": "OriginalImages",
        "PhotoAlbums": "69d2cf90-fc33-4fb7-9a0c-ebb0f0fcb43c",
        "69d2cf90-fc33-4fb7-9a0c-ebb0f0fcb43c": "PhotoAlbums",
        "PicturesLibrary": "a990ae9f-a03b-4e80-94bc-9912d7504104",
        "a990ae9f-a03b-4e80-94bc-9912d7504104": "PicturesLibrary",
        "Pictures": "33e28130-4e1e-4676-835a-98395c3bc3bb",
        "33e28130-4e1e-4676-835a-98395c3bc3bb": "Pictures",
        "Playlists": "de92c1c7-837f-4f69-a3bb-86e631204a23",
        "de92c1c7-837f-4f69-a3bb-86e631204a23": "Playlists",
        "PrintersFolder": "76fc4e2d-d6ad-4519-a663-37bd56068185",
        "76fc4e2d-d6ad-4519-a663-37bd56068185": "PrintersFolder",
        "PrintHood": "9274bd8d-cfd1-41c3-b35e-b13f55a758f4",
        "9274bd8d-cfd1-41c3-b35e-b13f55a758f4": "PrintHood",
        "Profile": "5e6c858f-0e22-4760-9afe-ea3317b67173",
        "5e6c858f-0e22-4760-9afe-ea3317b67173": "Profile",
        "ProgramData": "62ab5d82-fdc1-4dc3-a9dd-070d1d495d97",
        "62ab5d82-fdc1-4dc3-a9dd-070d1d495d97": "ProgramData",
        "ProgramFiles": "905e63b6-c1bf-494e-b29c-65b732d3d21a",
        "905e63b6-c1bf-494e-b29c-65b732d3d21a": "ProgramFiles",
        "ProgramFilesX64": "6d809377-6af0-444b-8957-a3773f02200e",
        "6d809377-6af0-444b-8957-a3773f02200e": "ProgramFilesX64",
        "ProgramFilesX86": "7c5a40ef-a0fb-4bfc-874a-c0f2e0b9fa8e",
        "7c5a40ef-a0fb-4bfc-874a-c0f2e0b9fa8e": "ProgramFilesX86",
        "ProgramFilesCommon": "f7f1ed05-9f6d-47a2-aaae-29d317c6f066",
        "f7f1ed05-9f6d-47a2-aaae-29d317c6f066": "ProgramFilesCommon",
        "ProgramFilesCommonX64": "6365d5a7-0f0d-45e5-87f6-0da56b6a4f7d",
        "6365d5a7-0f0d-45e5-87f6-0da56b6a4f7d": "ProgramFilesCommonX64",
        "ProgramFilesCommonX86": "de974d24-d9c6-4d3e-bf91-f4455120b917",
        "de974d24-d9c6-4d3e-bf91-f4455120b917": "ProgramFilesCommonX86",
        "Programs": "a77f5d77-2e2b-44c3-a6a2-aba601054a51",
        "a77f5d77-2e2b-44c3-a6a2-aba601054a51": "Programs",
        "Public": "dfdf76a2-c82a-4d63-906a-5644ac457385",
        "dfdf76a2-c82a-4d63-906a-5644ac457385": "Public",
        "PublicDesktop": "c4aa340d-f20f-4863-afef-f87ef2e6ba25",
        "c4aa340d-f20f-4863-afef-f87ef2e6ba25": "PublicDesktop",
        "PublicDocuments": "ed4824af-dce4-45a8-81e2-fc7965083634",
        "ed4824af-dce4-45a8-81e2-fc7965083634": "PublicDocuments",
        "PublicDownloads": "3d644c9b-1fb8-4f30-9b45-f670235f79c0",
        "3d644c9b-1fb8-4f30-9b45-f670235f79c0": "PublicDownloads",
        "PublicGameTasks": "debf2536-e1a8-4c59-b6a2-414586476aea",
        "debf2536-e1a8-4c59-b6a2-414586476aea": "PublicGameTasks",
        "PublicLibraries": "48daf80b-e6cf-4f4e-b800-0e69d84ee384",
        "48daf80b-e6cf-4f4e-b800-0e69d84ee384": "PublicLibraries",
        "PublicMusic": "3214fab5-9757-4298-bb61-92a9deaa44ff",
        "3214fab5-9757-4298-bb61-92a9deaa44ff": "PublicMusic",
        "PublicPictures": "b6ebfb86-6907-413c-9af7-4fc2abf07cc5",
        "b6ebfb86-6907-413c-9af7-4fc2abf07cc5": "PublicPictures",
        "PublicRingtones": "e555ab60-153b-4d17-9f04-a5fe99fc15ec",
        "e555ab60-153b-4d17-9f04-a5fe99fc15ec": "PublicRingtones",
        "PublicUserTiles": "0482af6c-08f1-4c34-8c90-e17ec98b1e17",
        "0482af6c-08f1-4c34-8c90-e17ec98b1e17": "PublicUserTiles",
        "PublicVideos": "2400183a-6185-49fb-a2d8-4a392a602ba3",
        "2400183a-6185-49fb-a2d8-4a392a602ba3": "PublicVideos",
        "QuickLaunch": "52a4f021-7b75-48a9-9f6b-4b87a210bc8f",
        "52a4f021-7b75-48a9-9f6b-4b87a210bc8f": "QuickLaunch",
        "Recent": "ae50c081-ebd2-438a-8655-8a092e34987a",
        "ae50c081-ebd2-438a-8655-8a092e34987a": "Recent",
        "RecordedTVLibrary": "1a6fdba2-f42d-4358-a798-b74d745926c5",
        "1a6fdba2-f42d-4358-a798-b74d745926c5": "RecordedTVLibrary",
        "RecycleBinFolder": "b7534046-3ecb-4c18-be4e-64cd4cb7d6ac",
        "b7534046-3ecb-4c18-be4e-64cd4cb7d6ac": "RecycleBinFolder",
        "ResourceDir": "8ad10c31-2adb-4296-a8f7-e4701232c972",
        "8ad10c31-2adb-4296-a8f7-e4701232c972": "ResourceDir",
        "Ringtones": "c870044b-f49e-4126-a9c3-b52a1ff411e8",
        "c870044b-f49e-4126-a9c3-b52a1ff411e8": "Ringtones",
        "RoamingAppData": "3eb685db-65f9-4cf6-a03a-e3ef65729f3d",
        "3eb685db-65f9-4cf6-a03a-e3ef65729f3d": "RoamingAppData",
        "RoamedTileImages": "aaa8d5a5-f1d6-4259-baa8-78e7ef60835e",
        "aaa8d5a5-f1d6-4259-baa8-78e7ef60835e": "RoamedTileImages",
        "RoamingTiles": "00bcfc5a-ed94-4e48-96a1-3f6217f21990",
        "00bcfc5a-ed94-4e48-96a1-3f6217f21990": "RoamingTiles",
        "SampleMusic": "b250c668-f57d-4ee1-a63c-290ee7d1aa1f",
        "b250c668-f57d-4ee1-a63c-290ee7d1aa1f": "SampleMusic",
        "SamplePictures": "c4900540-2379-4c75-844b-64e6faf8716b",
        "c4900540-2379-4c75-844b-64e6faf8716b": "SamplePictures",
        "SamplePlaylists": "15ca69b3-30ee-49c1-ace1-6b5ec372afb5",
        "15ca69b3-30ee-49c1-ace1-6b5ec372afb5": "SamplePlaylists",
        "SampleVideos": "859ead94-2e85-48ad-a71a-0969cb56a6cd",
        "859ead94-2e85-48ad-a71a-0969cb56a6cd": "SampleVideos",
        "SavedGames": "4c5c32ff-bb9d-43b0-b5b4-2d72e54eaaa4",
        "4c5c32ff-bb9d-43b0-b5b4-2d72e54eaaa4": "SavedGames",
        "SavedPictures": "3b193882-d3ad-4eab-965a-69829d1fb59f",
        "3b193882-d3ad-4eab-965a-69829d1fb59f": "SavedPictures",
        "SavedPicturesLibrary": "e25b5812-be88-4bd9-94b0-29233477b6c3",
        "e25b5812-be88-4bd9-94b0-29233477b6c3": "SavedPicturesLibrary",
        "SavedSearches": "7d1d3a04-debb-4115-95cf-2f29da2920da",
        "7d1d3a04-debb-4115-95cf-2f29da2920da": "SavedSearches",
        "Screenshots": "b7bede81-df94-4682-a7d8-57a52620b86f",
        "b7bede81-df94-4682-a7d8-57a52620b86f": "Screenshots",
        "SEARCH_CSC": "ee32e446-31ca-4aba-814f-a5ebd2fd6d5e",
        "ee32e446-31ca-4aba-814f-a5ebd2fd6d5e": "SEARCH_CSC",
        "SearchHistory": "0d4c3db6-03a3-462f-a0e6-08924c41b5d4",
        "0d4c3db6-03a3-462f-a0e6-08924c41b5d4": "SearchHistory",
        "SearchHome": "190337d1-b8ca-4121-a639-6d472d16972a",
        "190337d1-b8ca-4121-a639-6d472d16972a": "SearchHome",
        "SEARCH_MAPI": "98ec0e18-2098-4d44-8644-66979315a281",
        "98ec0e18-2098-4d44-8644-66979315a281": "SEARCH_MAPI",
        "SearchTemplates": "7e636bfe-dfa9-4d5e-b456-d7b39851d8a9",
        "7e636bfe-dfa9-4d5e-b456-d7b39851d8a9": "SearchTemplates",
        "SendTo": "8983036c-27c0-404b-8f08-102d10dcfd74",
        "8983036c-27c0-404b-8f08-102d10dcfd74": "SendTo",
        "SidebarDefaultParts": "7b396e54-9ec5-4300-be0a-2482ebae1a26",
        "7b396e54-9ec5-4300-be0a-2482ebae1a26": "SidebarDefaultParts",
        "SidebarParts": "a75d362e-50fc-4fb7-ac2c-a8beaa314493",
        "a75d362e-50fc-4fb7-ac2c-a8beaa314493": "SidebarParts",
        "SkyDrive": "a52bba46-e9e1-435f-b3d9-28daa648c0f6",
        "a52bba46-e9e1-435f-b3d9-28daa648c0f6": "SkyDrive",
        "SkyDriveCameraRoll": "767e6811-49cb-4273-87c2-20f355e1085b",
        "767e6811-49cb-4273-87c2-20f355e1085b": "SkyDriveCameraRoll",
        "SkyDriveDocuments": "24d89e24-2f19-4534-9dde-6a6671fbb8fe",
        "24d89e24-2f19-4534-9dde-6a6671fbb8fe": "SkyDriveDocuments",
        "SkyDrivePictures": "339719b5-8c47-4894-94c2-d8f77add44a6",
        "339719b5-8c47-4894-94c2-d8f77add44a6": "SkyDrivePictures",
        "StartMenu": "625b53c3-ab48-4ec1-ba1f-a1ef4146fc19",
        "625b53c3-ab48-4ec1-ba1f-a1ef4146fc19": "StartMenu",
        "Startup": "b97d20bb-f46a-4c97-ba10-5e3608430854",
        "b97d20bb-f46a-4c97-ba10-5e3608430854": "Startup",
        "SyncManagerFolder": "43668bf8-c14e-49b2-97c9-747784d784b7",
        "43668bf8-c14e-49b2-97c9-747784d784b7": "SyncManagerFolder",
        "SyncResultsFolder": "289a9a43-be44-4057-a41b-587a76d7e7f9",
        "289a9a43-be44-4057-a41b-587a76d7e7f9": "SyncResultsFolder",
        "SyncSetupFolder": "0f214138-b1d3-4a90-bba9-27cbc0c5389a",
        "0f214138-b1d3-4a90-bba9-27cbc0c5389a": "SyncSetupFolder",
        "System": "1ac14e77-02e7-4e5d-b744-2eb1ae5198b7",
        "1ac14e77-02e7-4e5d-b744-2eb1ae5198b7": "System",
        "SystemX86": "d65231b0-b2f1-4857-a4ce-a8e7c6ea7d27",
        "d65231b0-b2f1-4857-a4ce-a8e7c6ea7d27": "SystemX86",
        "Templates": "a63293e8-664e-48db-a079-df759e0509f7",
        "a63293e8-664e-48db-a079-df759e0509f7": "Templates",
        "UserPinned": "9e3995ab-1f9c-4f13-b827-48b24b6c7174",
        "9e3995ab-1f9c-4f13-b827-48b24b6c7174": "UserPinned",
        "UserProfiles": "0762d272-c50a-4bb0-a382-697dcd729b80",
        "0762d272-c50a-4bb0-a382-697dcd729b80": "UserProfiles",
        "UserProgramFiles": "5cd7aee2-2219-4a67-b85d-6c9ce15660cb",
        "5cd7aee2-2219-4a67-b85d-6c9ce15660cb": "UserProgramFiles",
        "UserProgramFilesCommon": "bcbd3057-ca5c-4622-b42d-bc56db0ae516",
        "bcbd3057-ca5c-4622-b42d-bc56db0ae516": "UserProgramFilesCommon",
        "UsersFiles": "f3ce0f7c-4901-4acc-8648-d5d44b04ef8f",
        "f3ce0f7c-4901-4acc-8648-d5d44b04ef8f": "UsersFiles",
        "UsersLibraries": "a302545d-deff-464b-abe8-61c8648d939b",
        "a302545d-deff-464b-abe8-61c8648d939b": "UsersLibraries",
        "Videos": "18989b1d-99b5-455b-841c-ab7c74e4ddfc",
        "18989b1d-99b5-455b-841c-ab7c74e4ddfc": "Videos",
        "VideosLibrary": "491e922f-5643-4af4-a7eb-4e7a138d8174",
        "491e922f-5643-4af4-a7eb-4e7a138d8174": "VideosLibrary",
        "Windows": "f38bf404-1d43-42f2-9305-67de0b28fc23",
        "f38bf404-1d43-42f2-9305-67de0b28fc23": "Windows"
      }
    };
  }
});

// packages/main/src/shortcut/win32/lnk/read.ts
function readLinkFlagBits(bits) {
  return {
    hasLinkTargetIDList: (bits & 1 << 0) != 0,
    hasLinkInfo: (bits & 1 << 1) != 0,
    hasName: (bits & 1 << 2) != 0,
    hasRelativePath: (bits & 1 << 3) != 0,
    hasWorkingDir: (bits & 1 << 4) != 0,
    hasArguments: (bits & 1 << 5) != 0,
    hasIconLocation: (bits & 1 << 6) != 0,
    isUnicode: (bits & 1 << 7) != 0,
    forceNoLinkInfo: (bits & 1 << 8) != 0,
    hasExpString: (bits & 1 << 9) != 0,
    runInSeparateProcess: (bits & 1 << 10) != 0,
    unused1: (bits & 1 << 11) != 0,
    hasDarwinID: (bits & 1 << 12) != 0,
    runAsUser: (bits & 1 << 13) != 0,
    hasExpIcon: (bits & 1 << 14) != 0,
    noPidlAlias: (bits & 1 << 15) != 0,
    unused2: (bits & 1 << 16) != 0,
    runWithShimLayer: (bits & 1 << 17) != 0,
    forceNoLinkTrack: (bits & 1 << 18) != 0,
    enableTargetMetadata: (bits & 1 << 19) != 0,
    disableLinkPathTracking: (bits & 1 << 20) != 0,
    disableKnownFolderTracking: (bits & 1 << 21) != 0,
    disableKnownFolderAlias: (bits & 1 << 22) != 0,
    allowLinkToLink: (bits & 1 << 23) != 0,
    unaliasOnSave: (bits & 1 << 24) != 0,
    preferEnvironmentPath: (bits & 1 << 25) != 0,
    keepLocalIDListForUNCTarget: (bits & 1 << 26) != 0
  };
}
function readTime(buffer, offset) {
}
function readGuid(buffer, offset) {
  const guid = Buffer.alloc(16);
  buffer.copy(guid, 0, offset);
  var o = 0;
  guid.writeUInt32BE(guid.readUInt32LE(o), o);
  o += 4;
  guid.writeUInt16BE(guid.readUInt16LE(o), o);
  o += 2;
  guid.writeUInt16BE(guid.readUInt16LE(o), o);
  o += 2;
  var s = "";
  for (var i = 0; i < 16; i++) {
    let b = guid[i].toString(16);
    if (b.length == 1)
      b = "0" + b;
    if ([4, 6, 8, 10].indexOf(i) >= 0)
      s += "-";
    s += b;
  }
  return {
    buffer: buffer.slice(offset, offset + 16),
    swapped: guid,
    string: s
  };
}
function readHeader(content) {
  const header = {};
  var offset = 0;
  const headerSize = content.readUInt32LE(offset);
  if (headerSize != import_common.default.header.size)
    throw new Error("Invalid Header size, expecting 0x4C");
  offset += 4;
  const linkCLSID = readGuid(content, offset);
  offset += 16;
  if (linkCLSID.string != import_common.default.header.linkCLSID)
    throw new Error("Invalid Header CLSID");
  header.linkFlags = content.readUInt32LE(offset);
  offset += 4;
  header.linkFlagBits = readLinkFlagBits(header.linkFlags);
  header.fileAttributes = content.readUInt32LE(offset);
  offset += 4;
  header.creationTime = readTime(content, offset);
  offset += 8;
  header.accessTime = readTime(content, offset);
  offset += 8;
  header.writeTime = readTime(content, offset);
  offset += 8;
  header.fileSize = content.readUInt32LE(offset);
  offset += 4;
  header.iconIndex = content.readUInt32LE(offset);
  offset += 4;
  header.showCommand = content.readUInt32LE(offset);
  offset += 4;
  header.hotKey = content.readUInt16LE(offset);
  offset += 2;
  offset += 2;
  offset += 4;
  offset += 4;
  return header;
}
function readZeroTerminatedString(buffer, offset) {
  var s = "";
  for (var i = offset; i < buffer.length; i++)
    if (buffer[i] == 0)
      break;
    else
      s += String.fromCharCode(buffer[i]);
  return s;
}
function readLinkTargetIDList(content, obj) {
  const linkTargetIDList = {
    items: []
  };
  linkTargetIDList.idListSize = content.readUInt16LE(obj.offset);
  obj.offset += 2;
  const endOffset = obj.offset + linkTargetIDList.idListSize;
  while (obj.offset < endOffset) {
    const itemIDSize = content.readUInt16LE(obj.offset);
    obj.offset += 2;
    const startOffset = obj.offset;
    if (itemIDSize == 0)
      break;
    const data = content.slice(obj.offset, obj.offset + itemIDSize - 2);
    obj.offset += itemIDSize - 2;
    var dOffset = 0;
    const type = data[0];
    dOffset++;
    const typeName = import_common.default.itemIDTypes[type];
    const item = {
      typeName,
      offset: startOffset
    };
    switch (typeName) {
      case "clsid":
        item.guid = readGuid(data, 2);
        item.clsidName = import_common.default.clsids[item.guid.string];
        break;
      case "file":
      case "directory":
        item.unknownByte = data[dOffset];
        dOffset++;
        item.size = data.readUInt32LE(dOffset);
        dOffset += 4;
        item.lastModified = data.readUInt32LE(dOffset);
        dOffset += 4;
        item.attributes = data.readUInt16LE(dOffset);
        dOffset += 2;
        item.shortName = readZeroTerminatedString(data, dOffset);
        item.data = data;
        break;
      default:
        item.type = type;
        item.length = itemIDSize - 2;
        item.data = data;
        break;
    }
    linkTargetIDList.items.push(item);
  }
  obj.linkTargetIDList = linkTargetIDList;
}
function readLinkInfo(content, obj) {
  const linkInfo = {};
  const bOffset = obj.offset;
  let offset = obj.offset;
  linkInfo.linkInfoSize = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.linkInfoHeaderSize = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.linkInfoFlags = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.linkInfoFlagBits = {
    hasVolumeIDAndLocalBasePath: (linkInfo.linkInfoFlags & 1 << 0) != 0,
    hasCommonNetworkRelativeLinkAndPathSuffix: (linkInfo.linkInfoFlags & 1 << 1) != 0
  };
  linkInfo.volumeIDOffset = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.localBasePathOffset = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.commonNetworkRelativeLinkOffset = content.readUInt32LE(offset);
  offset += 4;
  linkInfo.commonPathSuffixOffset = content.readUInt32LE(offset);
  offset += 4;
  if (linkInfo.linkInfoHeaderSize == 36) {
    linkInfo.localBasePathOffsetUnicode = content.readUInt32LE(offset);
    offset += 4;
    linkInfo.commonPathSuffixOffsetUnicode = content.readUInt32LE(offset);
    offset += 4;
  }
  if (linkInfo.linkInfoFlagBits.hasVolumeIDAndLocalBasePath) {
    const volumnID = {};
    let vOffset = bOffset + linkInfo.volumeIDOffset;
    const keys = ["VolumeIDSize", "DriveType", "DriveSerialNumber", "VolumeLabelOffset"];
    keys.forEach((k) => {
      volumnID[k[0].toLowerCase() + k.substr(1)] = content.readUInt32LE(vOffset);
      vOffset += 4;
    });
    linkInfo.volumnID = volumnID;
    linkInfo.localBasePath = readStringFromOffset(content, bOffset + linkInfo.localBasePathOffset);
  }
  linkInfo.commonPathSuffix = readStringFromOffset(content, bOffset + linkInfo.commonPathSuffixOffset);
  obj.offset += linkInfo.linkInfoSize;
  obj.linkInfo = linkInfo;
}
function readString(content, obj) {
  const length = content.readUInt16LE(obj.offset);
  obj.offset += 2;
  var byteLength = length;
  if (obj.header.linkFlagBits.isUnicode)
    byteLength *= 2;
  const buffer = content.slice(obj.offset, obj.offset + byteLength);
  obj.offset += byteLength;
  return buffer.toString("utf16le");
}
function readStringFromOffset(content, offset) {
  let pos = 0;
  while (content.readUInt8(offset + pos) != 0) {
    pos++;
  }
  return content.slice(offset, offset + pos).toString();
}
function readStringData(content, obj) {
  const stringData = {};
  if (obj.header.linkFlagBits.hasName)
    stringData.nameString = readString(content, obj);
  if (obj.header.linkFlagBits.hasRelativePath)
    stringData.relativePath = readString(content, obj);
  if (obj.header.linkFlagBits.hasWorkingDir)
    stringData.workingDir = readString(content, obj);
  if (obj.header.linkFlagBits.hasArguments)
    stringData.commandLineArgumentsBuffer = readString(content, obj);
  if (obj.header.linkFlagBits.hasIconLocation)
    stringData.iconLocation = readString(content, obj);
  obj.stringData = stringData;
}
function readExtraData(content, obj) {
  const extraData = {
    knownFolders: [],
    propertyStores: [],
    specialFolders: [],
    unknownBlocks: []
  };
  while (obj.offset < content.length) {
    const blockSize = content.readUInt32LE(obj.offset);
    obj.offset += 4;
    if (blockSize == 0)
      break;
    const blockSignature = content.readUInt32LE(obj.offset);
    obj.offset += 4;
    const blockContent = content.slice(obj.offset, obj.offset + blockSize - 8);
    obj.offset += blockSize - 8;
    switch (blockSignature) {
      case 2684354562:
        break;
      case 2684354564:
        break;
      case 2684354566:
        break;
      case 2684354561:
        break;
      case 2684354567:
        break;
      case 2684354571:
        const guid = readGuid(blockContent, 0);
        const offset = blockContent.readUInt32LE(16);
        extraData.knownFolders.push({
          guid,
          offset,
          folder: import_common.default.knownFolders[guid.string],
          buffer: blockContent
        });
        break;
      case 2684354569:
        extraData.propertyStores.push({
          buffer: blockContent
        });
        break;
      case 2684354568:
        break;
      case 2684354565:
        {
          const folderId = blockContent.readUInt32LE(0);
          const offset2 = blockContent.readUInt32LE(4);
          extraData.specialFolders.push({
            folderId,
            offset: offset2
          });
        }
        break;
      case 2684354563:
        break;
      case 2684354572:
        break;
      default:
        extraData.unknownBlocks.push(blockContent);
        break;
    }
  }
  obj.extraData = extraData;
}
async function readFile(filename) {
  const content = await import_fs.default.promises.readFile(filename);
  const obj = {};
  obj.header = readHeader(content);
  obj.offset = import_common.default.header.size;
  if (obj.header.linkFlagBits.hasLinkTargetIDList)
    readLinkTargetIDList(content, obj);
  if (obj.header.linkFlagBits.hasLinkInfo) {
    readLinkInfo(content, obj);
  }
  readStringData(content, obj);
  readExtraData(content, obj);
  return obj;
}
var import_fs, import_common;
var init_read = __esm({
  "packages/main/src/shortcut/win32/lnk/read.ts"() {
    import_fs = __toModule(require("fs"));
    import_common = __toModule(require_common());
  }
});

// packages/main/src/shortcut/win32/lnk/index.ts
var parse;
var init_lnk = __esm({
  "packages/main/src/shortcut/win32/lnk/index.ts"() {
    init_read();
    parse = readFile;
  }
});

// packages/main/src/shortcut/win32/index.ts
var win32_exports = {};
__export(win32_exports, {
  default: () => getApps2
});
async function _getpath(folder) {
  const files = await import_list_files_in_dir.default.listFiles(folder);
  const getTarget = async (myItem) => {
    try {
      const lnkObj = await parse(myItem);
      return {
        filename: myItem,
        workingDir: lnkObj.stringData.workingDir,
        nameString: lnkObj.stringData.nameString,
        targetPath: lnkObj.linkInfo.localBasePath
      };
    } catch (e) {
      return "";
    }
  };
  const promises = [];
  for (const item of files) {
    let ext = import_path.default.extname(item);
    if (ext.toLowerCase() === ".lnk") {
      promises.push(getTarget(item));
    }
  }
  return (await Promise.all(promises)).filter((ele) => ele !== "");
}
async function getApps2() {
  const homePath = import_os.default.homedir();
  const usersPath = import_path.default.dirname(homePath);
  const drivePath = import_path.default.dirname(usersPath);
  const folders = [
    homePath + "\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs",
    usersPath + "\\Default\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs",
    drivePath + "ProgramData\\Microsoft\\Windows\\Start Menu\\Programs",
    homePath + "\\Desktop"
  ];
  const promises = [];
  folders.forEach((f) => promises.push(_getpath(f)));
  const pResult = await Promise.all(promises);
  const allNodes = [];
  pResult.forEach((r) => allNodes.push(...r));
  return await Promise.all(allNodes.map(async (r) => {
    const ret = {};
    return {
      ...ret,
      name: import_path.default.basename(r.filename, ".lnk"),
      descriptioin: r.nameString || r.targetPath,
      exec: r.targetPath
    };
  }));
}
var import_list_files_in_dir, import_os, import_path;
var init_win32 = __esm({
  "packages/main/src/shortcut/win32/index.ts"() {
    import_list_files_in_dir = __toModule(require_lib());
    import_os = __toModule(require("os"));
    import_path = __toModule(require("path"));
    init_lnk();
  }
});

// node_modules/plist/lib/xmldom/entities.js
var require_entities = __commonJS({
  "node_modules/plist/lib/xmldom/entities.js"(exports2) {
    exports2.entityMap = {
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      times: "\xD7",
      divide: "\xF7",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      "int": "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      euro: "\u20AC",
      trade: "\u2122",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    };
  }
});

// node_modules/plist/lib/xmldom/sax.js
var require_sax = __commonJS({
  "node_modules/plist/lib/xmldom/sax.js"(exports2) {
    var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
    var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
    var S_TAG = 0;
    var S_ATTR = 1;
    var S_ATTR_SPACE = 2;
    var S_EQ = 3;
    var S_ATTR_NOQUOT_VALUE = 4;
    var S_ATTR_END = 5;
    var S_TAG_SPACE = 6;
    var S_TAG_CLOSE = 7;
    function ParseError(message, locator) {
      this.message = message;
      this.locator = locator;
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, ParseError);
    }
    ParseError.prototype = new Error();
    ParseError.prototype.name = ParseError.name;
    function XMLReader() {
    }
    XMLReader.prototype = {
      parse: function(source, defaultNSMap, entityMap) {
        var domBuilder = this.domBuilder;
        domBuilder.startDocument();
        _copy(defaultNSMap, defaultNSMap = {});
        parse2(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
        domBuilder.endDocument();
      }
    };
    function parse2(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
      function fixedFromCharCode(code) {
        if (code > 65535) {
          code -= 65536;
          var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
          return String.fromCharCode(surrogate1, surrogate2);
        } else {
          return String.fromCharCode(code);
        }
      }
      function entityReplacer(a2) {
        var k = a2.slice(1, -1);
        if (k in entityMap) {
          return entityMap[k];
        } else if (k.charAt(0) === "#") {
          return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
        } else {
          errorHandler.error("entity not found:" + a2);
          return a2;
        }
      }
      function appendText(end2) {
        if (end2 > start) {
          var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
          locator && position(start);
          domBuilder.characters(xt, 0, end2 - start);
          start = end2;
        }
      }
      function position(p, m) {
        while (p >= lineEnd && (m = linePattern.exec(source))) {
          lineStart = m.index;
          lineEnd = lineStart + m[0].length;
          locator.lineNumber++;
        }
        locator.columnNumber = p - lineStart + 1;
      }
      var lineStart = 0;
      var lineEnd = 0;
      var linePattern = /.*(?:\r\n?|\n)|.*$/g;
      var locator = domBuilder.locator;
      var parseStack = [{ currentNSMap: defaultNSMapCopy }];
      var closeMap = {};
      var start = 0;
      while (true) {
        try {
          var tagStart = source.indexOf("<", start);
          if (tagStart < 0) {
            if (!source.substr(start).match(/^\s*$/)) {
              var doc = domBuilder.doc;
              var text = doc.createTextNode(source.substr(start));
              doc.appendChild(text);
              domBuilder.currentElement = text;
            }
            return;
          }
          if (tagStart > start) {
            appendText(tagStart);
          }
          switch (source.charAt(tagStart + 1)) {
            case "/":
              var end = source.indexOf(">", tagStart + 3);
              var tagName = source.substring(tagStart + 2, end);
              var config = parseStack.pop();
              if (end < 0) {
                tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                end = tagStart + 1 + tagName.length;
              } else if (tagName.match(/\s</)) {
                tagName = tagName.replace(/[\s<].*/, "");
                errorHandler.error("end tag name: " + tagName + " maybe not complete");
                end = tagStart + 1 + tagName.length;
              }
              var localNSMap = config.localNSMap;
              var endMatch = config.tagName == tagName;
              var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
              if (endIgnoreCaseMach) {
                domBuilder.endElement(config.uri, config.localName, tagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    domBuilder.endPrefixMapping(prefix);
                  }
                }
                if (!endMatch) {
                  errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                }
              } else {
                parseStack.push(config);
              }
              end++;
              break;
            case "?":
              locator && position(tagStart);
              end = parseInstruction(source, tagStart, domBuilder);
              break;
            case "!":
              locator && position(tagStart);
              end = parseDCC(source, tagStart, domBuilder, errorHandler);
              break;
            default:
              locator && position(tagStart);
              var el = new ElementAttributes();
              var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
              var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
              var len = el.length;
              if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                el.closed = true;
                if (!entityMap.nbsp) {
                  errorHandler.warning("unclosed xml attribute");
                }
              }
              if (locator && len) {
                var locator2 = copyLocator(locator, {});
                for (var i = 0; i < len; i++) {
                  var a = el[i];
                  position(a.offset);
                  a.locator = copyLocator(locator, {});
                }
                domBuilder.locator = locator2;
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
                domBuilder.locator = locator;
              } else {
                if (appendElement(el, domBuilder, currentNSMap)) {
                  parseStack.push(el);
                }
              }
              if (el.uri === "http://www.w3.org/1999/xhtml" && !el.closed) {
                end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
              } else {
                end++;
              }
          }
        } catch (e) {
          if (e instanceof ParseError) {
            throw e;
          }
          errorHandler.error("element parse error: " + e);
          end = -1;
        }
        if (end > start) {
          start = end;
        } else {
          appendText(Math.max(tagStart, start) + 1);
        }
      }
    }
    function copyLocator(f, t) {
      t.lineNumber = f.lineNumber;
      t.columnNumber = f.columnNumber;
      return t;
    }
    function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
      function addAttribute(qname, value2, startIndex) {
        if (qname in el.attributeNames)
          errorHandler.fatalError("Attribute " + qname + " redefined");
        el.addValue(qname, value2, startIndex);
      }
      var attrName;
      var value;
      var p = ++start;
      var s = S_TAG;
      while (true) {
        var c = source.charAt(p);
        switch (c) {
          case "=":
            if (s === S_ATTR) {
              attrName = source.slice(start, p);
              s = S_EQ;
            } else if (s === S_ATTR_SPACE) {
              s = S_EQ;
            } else {
              throw new Error("attribute equal must after attrName");
            }
            break;
          case "'":
          case '"':
            if (s === S_EQ || s === S_ATTR) {
              if (s === S_ATTR) {
                errorHandler.warning('attribute value must after "="');
                attrName = source.slice(start, p);
              }
              start = p + 1;
              p = source.indexOf(c, start);
              if (p > 0) {
                value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                addAttribute(attrName, value, start - 1);
                s = S_ATTR_END;
              } else {
                throw new Error("attribute value no end '" + c + "' match");
              }
            } else if (s == S_ATTR_NOQUOT_VALUE) {
              value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              addAttribute(attrName, value, start);
              errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
              start = p + 1;
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value must after "="');
            }
            break;
          case "/":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                s = S_TAG_CLOSE;
                el.closed = true;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
              case S_ATTR_SPACE:
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            errorHandler.error("unexpected end of input");
            if (s == S_TAG) {
              el.setTagName(source.slice(start, p));
            }
            return p;
          case ">":
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p));
              case S_ATTR_END:
              case S_TAG_SPACE:
              case S_TAG_CLOSE:
                break;
              case S_ATTR_NOQUOT_VALUE:
              case S_ATTR:
                value = source.slice(start, p);
                if (value.slice(-1) === "/") {
                  el.closed = true;
                  value = value.slice(0, -1);
                }
              case S_ATTR_SPACE:
                if (s === S_ATTR_SPACE) {
                  value = attrName;
                }
                if (s == S_ATTR_NOQUOT_VALUE) {
                  errorHandler.warning('attribute "' + value + '" missed quot(")!');
                  addAttribute(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
                } else {
                  if (currentNSMap[""] !== "http://www.w3.org/1999/xhtml" || !value.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                  }
                  addAttribute(value, value, start);
                }
                break;
              case S_EQ:
                throw new Error("attribute value missed!!");
            }
            return p;
          case "\x80":
            c = " ";
          default:
            if (c <= " ") {
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                  s = S_TAG_SPACE;
                  break;
                case S_ATTR:
                  attrName = source.slice(start, p);
                  s = S_ATTR_SPACE;
                  break;
                case S_ATTR_NOQUOT_VALUE:
                  var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                  errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                  addAttribute(attrName, value, start);
                case S_ATTR_END:
                  s = S_TAG_SPACE;
                  break;
              }
            } else {
              switch (s) {
                case S_ATTR_SPACE:
                  var tagName = el.tagName;
                  if (currentNSMap[""] !== "http://www.w3.org/1999/xhtml" || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                    errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                  }
                  addAttribute(attrName, attrName, start);
                  start = p;
                  s = S_ATTR;
                  break;
                case S_ATTR_END:
                  errorHandler.warning('attribute space is required"' + attrName + '"!!');
                case S_TAG_SPACE:
                  s = S_ATTR;
                  start = p;
                  break;
                case S_EQ:
                  s = S_ATTR_NOQUOT_VALUE;
                  start = p;
                  break;
                case S_TAG_CLOSE:
                  throw new Error("elements closed character '/' and '>' must be connected to");
              }
            }
        }
        p++;
      }
    }
    function appendElement(el, domBuilder, currentNSMap) {
      var tagName = el.tagName;
      var localNSMap = null;
      var i = el.length;
      while (i--) {
        var a = el[i];
        var qName = a.qName;
        var value = a.value;
        var nsp = qName.indexOf(":");
        if (nsp > 0) {
          var prefix = a.prefix = qName.slice(0, nsp);
          var localName = qName.slice(nsp + 1);
          var nsPrefix = prefix === "xmlns" && localName;
        } else {
          localName = qName;
          prefix = null;
          nsPrefix = qName === "xmlns" && "";
        }
        a.localName = localName;
        if (nsPrefix !== false) {
          if (localNSMap == null) {
            localNSMap = {};
            _copy(currentNSMap, currentNSMap = {});
          }
          currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
          a.uri = "http://www.w3.org/2000/xmlns/";
          domBuilder.startPrefixMapping(nsPrefix, value);
        }
      }
      var i = el.length;
      while (i--) {
        a = el[i];
        var prefix = a.prefix;
        if (prefix) {
          if (prefix === "xml") {
            a.uri = "http://www.w3.org/XML/1998/namespace";
          }
          if (prefix !== "xmlns") {
            a.uri = currentNSMap[prefix || ""];
          }
        }
      }
      var nsp = tagName.indexOf(":");
      if (nsp > 0) {
        prefix = el.prefix = tagName.slice(0, nsp);
        localName = el.localName = tagName.slice(nsp + 1);
      } else {
        prefix = null;
        localName = el.localName = tagName;
      }
      var ns = el.uri = currentNSMap[prefix || ""];
      domBuilder.startElement(ns, localName, tagName, el);
      if (el.closed) {
        domBuilder.endElement(ns, localName, tagName);
        if (localNSMap) {
          for (prefix in localNSMap) {
            domBuilder.endPrefixMapping(prefix);
          }
        }
      } else {
        el.currentNSMap = currentNSMap;
        el.localNSMap = localNSMap;
        return true;
      }
    }
    function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
      if (/^(?:script|textarea)$/i.test(tagName)) {
        var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
        var text = source.substring(elStartEnd + 1, elEndStart);
        if (/[&<]/.test(text)) {
          if (/^script$/i.test(tagName)) {
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
          text = text.replace(/&#?\w+;/g, entityReplacer);
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
      }
      return elStartEnd + 1;
    }
    function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
      var pos = closeMap[tagName];
      if (pos == null) {
        pos = source.lastIndexOf("</" + tagName + ">");
        if (pos < elStartEnd) {
          pos = source.lastIndexOf("</" + tagName);
        }
        closeMap[tagName] = pos;
      }
      return pos < elStartEnd;
    }
    function _copy(source, target) {
      for (var n in source) {
        target[n] = source[n];
      }
    }
    function parseDCC(source, start, domBuilder, errorHandler) {
      var next = source.charAt(start + 2);
      switch (next) {
        case "-":
          if (source.charAt(start + 3) === "-") {
            var end = source.indexOf("-->", start + 4);
            if (end > start) {
              domBuilder.comment(source, start + 4, end - start - 4);
              return end + 3;
            } else {
              errorHandler.error("Unclosed comment");
              return -1;
            }
          } else {
            return -1;
          }
        default:
          if (source.substr(start + 3, 6) == "CDATA[") {
            var end = source.indexOf("]]>", start + 9);
            domBuilder.startCDATA();
            domBuilder.characters(source, start + 9, end - start - 9);
            domBuilder.endCDATA();
            return end + 3;
          }
          var matchs = split(source, start);
          var len = matchs.length;
          if (len > 1 && /!doctype/i.test(matchs[0][0])) {
            var name = matchs[1][0];
            var pubid = false;
            var sysid = false;
            if (len > 3) {
              if (/^public$/i.test(matchs[2][0])) {
                pubid = matchs[3][0];
                sysid = len > 4 && matchs[4][0];
              } else if (/^system$/i.test(matchs[2][0])) {
                sysid = matchs[3][0];
              }
            }
            var lastMatch = matchs[len - 1];
            domBuilder.startDTD(name, pubid, sysid);
            domBuilder.endDTD();
            return lastMatch.index + lastMatch[0].length;
          }
      }
      return -1;
    }
    function parseInstruction(source, start, domBuilder) {
      var end = source.indexOf("?>", start);
      if (end) {
        var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        if (match) {
          var len = match[0].length;
          domBuilder.processingInstruction(match[1], match[2]);
          return end + 2;
        } else {
          return -1;
        }
      }
      return -1;
    }
    function ElementAttributes() {
      this.attributeNames = {};
    }
    ElementAttributes.prototype = {
      setTagName: function(tagName) {
        if (!tagNamePattern.test(tagName)) {
          throw new Error("invalid tagName:" + tagName);
        }
        this.tagName = tagName;
      },
      addValue: function(qName, value, offset) {
        if (!tagNamePattern.test(qName)) {
          throw new Error("invalid attribute:" + qName);
        }
        this.attributeNames[qName] = this.length;
        this[this.length++] = { qName, value, offset };
      },
      length: 0,
      getLocalName: function(i) {
        return this[i].localName;
      },
      getLocator: function(i) {
        return this[i].locator;
      },
      getQName: function(i) {
        return this[i].qName;
      },
      getURI: function(i) {
        return this[i].uri;
      },
      getValue: function(i) {
        return this[i].value;
      }
    };
    function split(source, start) {
      var match;
      var buf = [];
      var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      reg.lastIndex = start;
      reg.exec(source);
      while (match = reg.exec(source)) {
        buf.push(match);
        if (match[1])
          return buf;
      }
    }
    exports2.XMLReader = XMLReader;
    exports2.ParseError = ParseError;
  }
});

// node_modules/plist/lib/xmldom/dom.js
var require_dom = __commonJS({
  "node_modules/plist/lib/xmldom/dom.js"(exports2) {
    function copy(src, dest) {
      for (var p in src) {
        dest[p] = src[p];
      }
    }
    function _extends(Class, Super) {
      var pt = Class.prototype;
      if (!(pt instanceof Super)) {
        let t2 = function() {
        };
        var t = t2;
        ;
        t2.prototype = Super.prototype;
        t2 = new t2();
        copy(pt, t2);
        Class.prototype = pt = t2;
      }
      if (pt.constructor != Class) {
        if (typeof Class != "function") {
          console.error("unknow Class:" + Class);
        }
        pt.constructor = Class;
      }
    }
    var htmlns = "http://www.w3.org/1999/xhtml";
    var NodeType = {};
    var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = NodeType.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
    var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
    var ExceptionCode = {};
    var ExceptionMessage = {};
    var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
    var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
    var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
    var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
    var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
    var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
    var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
    var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
    var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
    var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
    var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
    var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
    var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
    var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
    var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
    function DOMException(code, message) {
      if (message instanceof Error) {
        var error = message;
      } else {
        error = this;
        Error.call(this, ExceptionMessage[code]);
        this.message = ExceptionMessage[code];
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, DOMException);
      }
      error.code = code;
      if (message)
        this.message = this.message + ": " + message;
      return error;
    }
    DOMException.prototype = Error.prototype;
    copy(ExceptionCode, DOMException);
    function NodeList() {
    }
    NodeList.prototype = {
      length: 0,
      item: function(index) {
        return this[index] || null;
      },
      toString: function(isHTML, nodeFilter) {
        for (var buf = [], i = 0; i < this.length; i++) {
          serializeToString(this[i], buf, isHTML, nodeFilter);
        }
        return buf.join("");
      }
    };
    function LiveNodeList(node, refresh) {
      this._node = node;
      this._refresh = refresh;
      _updateLiveList(this);
    }
    function _updateLiveList(list) {
      var inc = list._node._inc || list._node.ownerDocument._inc;
      if (list._inc != inc) {
        var ls = list._refresh(list._node);
        __set__(list, "length", ls.length);
        copy(ls, list);
        list._inc = inc;
      }
    }
    LiveNodeList.prototype.item = function(i) {
      _updateLiveList(this);
      return this[i];
    };
    _extends(LiveNodeList, NodeList);
    function NamedNodeMap() {
    }
    function _findNodeIndex(list, node) {
      var i = list.length;
      while (i--) {
        if (list[i] === node) {
          return i;
        }
      }
    }
    function _addNamedNode(el, list, newAttr, oldAttr) {
      if (oldAttr) {
        list[_findNodeIndex(list, oldAttr)] = newAttr;
      } else {
        list[list.length++] = newAttr;
      }
      if (el) {
        newAttr.ownerElement = el;
        var doc = el.ownerDocument;
        if (doc) {
          oldAttr && _onRemoveAttribute(doc, el, oldAttr);
          _onAddAttribute(doc, el, newAttr);
        }
      }
    }
    function _removeNamedNode(el, list, attr) {
      var i = _findNodeIndex(list, attr);
      if (i >= 0) {
        var lastIndex = list.length - 1;
        while (i < lastIndex) {
          list[i] = list[++i];
        }
        list.length = lastIndex;
        if (el) {
          var doc = el.ownerDocument;
          if (doc) {
            _onRemoveAttribute(doc, el, attr);
            attr.ownerElement = null;
          }
        }
      } else {
        throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
      }
    }
    NamedNodeMap.prototype = {
      length: 0,
      item: NodeList.prototype.item,
      getNamedItem: function(key) {
        var i = this.length;
        while (i--) {
          var attr = this[i];
          if (attr.nodeName == key) {
            return attr;
          }
        }
      },
      setNamedItem: function(attr) {
        var el = attr.ownerElement;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        var oldAttr = this.getNamedItem(attr.nodeName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      setNamedItemNS: function(attr) {
        var el = attr.ownerElement, oldAttr;
        if (el && el != this._ownerElement) {
          throw new DOMException(INUSE_ATTRIBUTE_ERR);
        }
        oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
        _addNamedNode(this._ownerElement, this, attr, oldAttr);
        return oldAttr;
      },
      removeNamedItem: function(key) {
        var attr = this.getNamedItem(key);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      removeNamedItemNS: function(namespaceURI, localName) {
        var attr = this.getNamedItemNS(namespaceURI, localName);
        _removeNamedNode(this._ownerElement, this, attr);
        return attr;
      },
      getNamedItemNS: function(namespaceURI, localName) {
        var i = this.length;
        while (i--) {
          var node = this[i];
          if (node.localName == localName && node.namespaceURI == namespaceURI) {
            return node;
          }
        }
        return null;
      }
    };
    function DOMImplementation(features) {
      this._features = {};
      if (features) {
        for (var feature in features) {
          this._features = features[feature];
        }
      }
    }
    DOMImplementation.prototype = {
      hasFeature: function(feature, version) {
        var versions = this._features[feature.toLowerCase()];
        if (versions && (!version || version in versions)) {
          return true;
        } else {
          return false;
        }
      },
      createDocument: function(namespaceURI, qualifiedName, doctype) {
        var doc = new Document();
        doc.implementation = this;
        doc.childNodes = new NodeList();
        doc.doctype = doctype;
        if (doctype) {
          doc.appendChild(doctype);
        }
        if (qualifiedName) {
          var root = doc.createElementNS(namespaceURI, qualifiedName);
          doc.appendChild(root);
        }
        return doc;
      },
      createDocumentType: function(qualifiedName, publicId, systemId) {
        var node = new DocumentType();
        node.name = qualifiedName;
        node.nodeName = qualifiedName;
        node.publicId = publicId;
        node.systemId = systemId;
        return node;
      }
    };
    function Node() {
    }
    Node.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function(newChild, refChild) {
        return _insertBefore(this, newChild, refChild);
      },
      replaceChild: function(newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        if (oldChild) {
          this.removeChild(oldChild);
        }
      },
      removeChild: function(oldChild) {
        return _removeChild(this, oldChild);
      },
      appendChild: function(newChild) {
        return this.insertBefore(newChild, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(deep) {
        return cloneNode(this.ownerDocument || this, this, deep);
      },
      normalize: function() {
        var child = this.firstChild;
        while (child) {
          var next = child.nextSibling;
          if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
            this.removeChild(next);
            child.appendData(next.data);
          } else {
            child.normalize();
            child = next;
          }
        }
      },
      isSupported: function(feature, version) {
        return this.ownerDocument.implementation.hasFeature(feature, version);
      },
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      lookupPrefix: function(namespaceURI) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            for (var n in map) {
              if (map[n] == namespaceURI) {
                return n;
              }
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function(prefix) {
        var el = this;
        while (el) {
          var map = el._nsMap;
          if (map) {
            if (prefix in map) {
              return map[prefix];
            }
          }
          el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function(namespaceURI) {
        var prefix = this.lookupPrefix(namespaceURI);
        return prefix == null;
      }
    };
    function _xmlEncoder(c) {
      return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
    }
    copy(NodeType, Node);
    copy(NodeType, Node.prototype);
    function _visitNode(node, callback) {
      if (callback(node)) {
        return true;
      }
      if (node = node.firstChild) {
        do {
          if (_visitNode(node, callback)) {
            return true;
          }
        } while (node = node.nextSibling);
      }
    }
    function Document() {
    }
    function _onAddAttribute(doc, el, newAttr) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns == "http://www.w3.org/2000/xmlns/") {
        el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
      }
    }
    function _onRemoveAttribute(doc, el, newAttr, remove) {
      doc && doc._inc++;
      var ns = newAttr.namespaceURI;
      if (ns == "http://www.w3.org/2000/xmlns/") {
        delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
      }
    }
    function _onUpdateChild(doc, el, newChild) {
      if (doc && doc._inc) {
        doc._inc++;
        var cs = el.childNodes;
        if (newChild) {
          cs[cs.length++] = newChild;
        } else {
          var child = el.firstChild;
          var i = 0;
          while (child) {
            cs[i++] = child;
            child = child.nextSibling;
          }
          cs.length = i;
        }
      }
    }
    function _removeChild(parentNode, child) {
      var previous = child.previousSibling;
      var next = child.nextSibling;
      if (previous) {
        previous.nextSibling = next;
      } else {
        parentNode.firstChild = next;
      }
      if (next) {
        next.previousSibling = previous;
      } else {
        parentNode.lastChild = previous;
      }
      _onUpdateChild(parentNode.ownerDocument, parentNode);
      return child;
    }
    function _insertBefore(parentNode, newChild, nextChild) {
      var cp = newChild.parentNode;
      if (cp) {
        cp.removeChild(newChild);
      }
      if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        var newFirst = newChild.firstChild;
        if (newFirst == null) {
          return newChild;
        }
        var newLast = newChild.lastChild;
      } else {
        newFirst = newLast = newChild;
      }
      var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
      newFirst.previousSibling = pre;
      newLast.nextSibling = nextChild;
      if (pre) {
        pre.nextSibling = newFirst;
      } else {
        parentNode.firstChild = newFirst;
      }
      if (nextChild == null) {
        parentNode.lastChild = newLast;
      } else {
        nextChild.previousSibling = newLast;
      }
      do {
        newFirst.parentNode = parentNode;
      } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
      _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);
      if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
        newChild.firstChild = newChild.lastChild = null;
      }
      return newChild;
    }
    function _appendSingleChild(parentNode, newChild) {
      var cp = newChild.parentNode;
      if (cp) {
        var pre = parentNode.lastChild;
        cp.removeChild(newChild);
        var pre = parentNode.lastChild;
      }
      var pre = parentNode.lastChild;
      newChild.parentNode = parentNode;
      newChild.previousSibling = pre;
      newChild.nextSibling = null;
      if (pre) {
        pre.nextSibling = newChild;
      } else {
        parentNode.firstChild = newChild;
      }
      parentNode.lastChild = newChild;
      _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
      return newChild;
    }
    Document.prototype = {
      nodeName: "#document",
      nodeType: DOCUMENT_NODE,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(newChild, refChild) {
        if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
          var child = newChild.firstChild;
          while (child) {
            var next = child.nextSibling;
            this.insertBefore(child, refChild);
            child = next;
          }
          return newChild;
        }
        if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
          this.documentElement = newChild;
        }
        return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
      },
      removeChild: function(oldChild) {
        if (this.documentElement == oldChild) {
          this.documentElement = null;
        }
        return _removeChild(this, oldChild);
      },
      importNode: function(importedNode, deep) {
        return importNode(this, importedNode, deep);
      },
      getElementById: function(id) {
        var rtv = null;
        _visitNode(this.documentElement, function(node) {
          if (node.nodeType == ELEMENT_NODE) {
            if (node.getAttribute("id") == id) {
              rtv = node;
              return true;
            }
          }
        });
        return rtv;
      },
      getElementsByClassName: function(className) {
        var pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base.documentElement, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE) {
              if (pattern.test(node.getAttribute("class"))) {
                ls.push(node);
              }
            }
          });
          return ls;
        });
      },
      createElement: function(tagName) {
        var node = new Element();
        node.ownerDocument = this;
        node.nodeName = tagName;
        node.tagName = tagName;
        node.childNodes = new NodeList();
        var attrs = node.attributes = new NamedNodeMap();
        attrs._ownerElement = node;
        return node;
      },
      createDocumentFragment: function() {
        var node = new DocumentFragment();
        node.ownerDocument = this;
        node.childNodes = new NodeList();
        return node;
      },
      createTextNode: function(data) {
        var node = new Text();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createComment: function(data) {
        var node = new Comment();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createCDATASection: function(data) {
        var node = new CDATASection();
        node.ownerDocument = this;
        node.appendData(data);
        return node;
      },
      createProcessingInstruction: function(target, data) {
        var node = new ProcessingInstruction();
        node.ownerDocument = this;
        node.tagName = node.target = target;
        node.nodeValue = node.data = data;
        return node;
      },
      createAttribute: function(name) {
        var node = new Attr();
        node.ownerDocument = this;
        node.name = name;
        node.nodeName = name;
        node.localName = name;
        node.specified = true;
        return node;
      },
      createEntityReference: function(name) {
        var node = new EntityReference();
        node.ownerDocument = this;
        node.nodeName = name;
        return node;
      },
      createElementNS: function(namespaceURI, qualifiedName) {
        var node = new Element();
        var pl = qualifiedName.split(":");
        var attrs = node.attributes = new NamedNodeMap();
        node.childNodes = new NodeList();
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.tagName = qualifiedName;
        node.namespaceURI = namespaceURI;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        attrs._ownerElement = node;
        return node;
      },
      createAttributeNS: function(namespaceURI, qualifiedName) {
        var node = new Attr();
        var pl = qualifiedName.split(":");
        node.ownerDocument = this;
        node.nodeName = qualifiedName;
        node.name = qualifiedName;
        node.namespaceURI = namespaceURI;
        node.specified = true;
        if (pl.length == 2) {
          node.prefix = pl[0];
          node.localName = pl[1];
        } else {
          node.localName = qualifiedName;
        }
        return node;
      }
    };
    _extends(Document, Node);
    function Element() {
      this._nsMap = {};
    }
    Element.prototype = {
      nodeType: ELEMENT_NODE,
      hasAttribute: function(name) {
        return this.getAttributeNode(name) != null;
      },
      getAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        return attr && attr.value || "";
      },
      getAttributeNode: function(name) {
        return this.attributes.getNamedItem(name);
      },
      setAttribute: function(name, value) {
        var attr = this.ownerDocument.createAttribute(name);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      removeAttribute: function(name) {
        var attr = this.getAttributeNode(name);
        attr && this.removeAttributeNode(attr);
      },
      appendChild: function(newChild) {
        if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
          return this.insertBefore(newChild, null);
        } else {
          return _appendSingleChild(this, newChild);
        }
      },
      setAttributeNode: function(newAttr) {
        return this.attributes.setNamedItem(newAttr);
      },
      setAttributeNodeNS: function(newAttr) {
        return this.attributes.setNamedItemNS(newAttr);
      },
      removeAttributeNode: function(oldAttr) {
        return this.attributes.removeNamedItem(oldAttr.nodeName);
      },
      removeAttributeNS: function(namespaceURI, localName) {
        var old = this.getAttributeNodeNS(namespaceURI, localName);
        old && this.removeAttributeNode(old);
      },
      hasAttributeNS: function(namespaceURI, localName) {
        return this.getAttributeNodeNS(namespaceURI, localName) != null;
      },
      getAttributeNS: function(namespaceURI, localName) {
        var attr = this.getAttributeNodeNS(namespaceURI, localName);
        return attr && attr.value || "";
      },
      setAttributeNS: function(namespaceURI, qualifiedName, value) {
        var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
        attr.value = attr.nodeValue = "" + value;
        this.setAttributeNode(attr);
      },
      getAttributeNodeNS: function(namespaceURI, localName) {
        return this.attributes.getNamedItemNS(namespaceURI, localName);
      },
      getElementsByTagName: function(tagName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      },
      getElementsByTagNameNS: function(namespaceURI, localName) {
        return new LiveNodeList(this, function(base) {
          var ls = [];
          _visitNode(base, function(node) {
            if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
              ls.push(node);
            }
          });
          return ls;
        });
      }
    };
    Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
    Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
    _extends(Element, Node);
    function Attr() {
    }
    Attr.prototype.nodeType = ATTRIBUTE_NODE;
    _extends(Attr, Node);
    function CharacterData() {
    }
    CharacterData.prototype = {
      data: "",
      substringData: function(offset, count) {
        return this.data.substring(offset, offset + count);
      },
      appendData: function(text) {
        text = this.data + text;
        this.nodeValue = this.data = text;
        this.length = text.length;
      },
      insertData: function(offset, text) {
        this.replaceData(offset, 0, text);
      },
      appendChild: function(newChild) {
        throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
      },
      deleteData: function(offset, count) {
        this.replaceData(offset, count, "");
      },
      replaceData: function(offset, count, text) {
        var start = this.data.substring(0, offset);
        var end = this.data.substring(offset + count);
        text = start + text + end;
        this.nodeValue = this.data = text;
        this.length = text.length;
      }
    };
    _extends(CharacterData, Node);
    function Text() {
    }
    Text.prototype = {
      nodeName: "#text",
      nodeType: TEXT_NODE,
      splitText: function(offset) {
        var text = this.data;
        var newText = text.substring(offset);
        text = text.substring(0, offset);
        this.data = this.nodeValue = text;
        this.length = text.length;
        var newNode = this.ownerDocument.createTextNode(newText);
        if (this.parentNode) {
          this.parentNode.insertBefore(newNode, this.nextSibling);
        }
        return newNode;
      }
    };
    _extends(Text, CharacterData);
    function Comment() {
    }
    Comment.prototype = {
      nodeName: "#comment",
      nodeType: COMMENT_NODE
    };
    _extends(Comment, CharacterData);
    function CDATASection() {
    }
    CDATASection.prototype = {
      nodeName: "#cdata-section",
      nodeType: CDATA_SECTION_NODE
    };
    _extends(CDATASection, CharacterData);
    function DocumentType() {
    }
    DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
    _extends(DocumentType, Node);
    function Notation() {
    }
    Notation.prototype.nodeType = NOTATION_NODE;
    _extends(Notation, Node);
    function Entity() {
    }
    Entity.prototype.nodeType = ENTITY_NODE;
    _extends(Entity, Node);
    function EntityReference() {
    }
    EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
    _extends(EntityReference, Node);
    function DocumentFragment() {
    }
    DocumentFragment.prototype.nodeName = "#document-fragment";
    DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
    _extends(DocumentFragment, Node);
    function ProcessingInstruction() {
    }
    ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
    _extends(ProcessingInstruction, Node);
    function XMLSerializer() {
    }
    XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
      return nodeSerializeToString.call(node, isHtml, nodeFilter);
    };
    Node.prototype.toString = nodeSerializeToString;
    function nodeSerializeToString(isHtml, nodeFilter) {
      var buf = [];
      var refNode = this.nodeType == 9 && this.documentElement || this;
      var prefix = refNode.prefix;
      var uri = refNode.namespaceURI;
      if (uri && prefix == null) {
        var prefix = refNode.lookupPrefix(uri);
        if (prefix == null) {
          var visibleNamespaces = [
            { namespace: uri, prefix: null }
          ];
        }
      }
      serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
      return buf.join("");
    }
    function needNamespaceDefine(node, isHTML, visibleNamespaces) {
      var prefix = node.prefix || "";
      var uri = node.namespaceURI;
      if (!prefix && !uri) {
        return false;
      }
      if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == "http://www.w3.org/2000/xmlns/") {
        return false;
      }
      var i = visibleNamespaces.length;
      while (i--) {
        var ns = visibleNamespaces[i];
        if (ns.prefix == prefix) {
          return ns.namespace != uri;
        }
      }
      return true;
    }
    function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
      if (nodeFilter) {
        node = nodeFilter(node);
        if (node) {
          if (typeof node == "string") {
            buf.push(node);
            return;
          }
        } else {
          return;
        }
      }
      switch (node.nodeType) {
        case ELEMENT_NODE:
          if (!visibleNamespaces)
            visibleNamespaces = [];
          var startVisibleNamespaces = visibleNamespaces.length;
          var attrs = node.attributes;
          var len = attrs.length;
          var child = node.firstChild;
          var nodeName = node.tagName;
          isHTML = htmlns === node.namespaceURI || isHTML;
          buf.push("<", nodeName);
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (attr.prefix == "xmlns") {
              visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
            } else if (attr.nodeName == "xmlns") {
              visibleNamespaces.push({ prefix: "", namespace: attr.value });
            }
          }
          for (var i = 0; i < len; i++) {
            var attr = attrs.item(i);
            if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
              var prefix = attr.prefix || "";
              var uri = attr.namespaceURI;
              var ns = prefix ? " xmlns:" + prefix : " xmlns";
              buf.push(ns, '="', uri, '"');
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
          }
          if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
            var prefix = node.prefix || "";
            var uri = node.namespaceURI;
            if (uri) {
              var ns = prefix ? " xmlns:" + prefix : " xmlns";
              buf.push(ns, '="', uri, '"');
              visibleNamespaces.push({ prefix, namespace: uri });
            }
          }
          if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
            buf.push(">");
            if (isHTML && /^script$/i.test(nodeName)) {
              while (child) {
                if (child.data) {
                  buf.push(child.data);
                } else {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
                }
                child = child.nextSibling;
              }
            } else {
              while (child) {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
                child = child.nextSibling;
              }
            }
            buf.push("</", nodeName, ">");
          } else {
            buf.push("/>");
          }
          return;
        case DOCUMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var child = node.firstChild;
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
          return;
        case ATTRIBUTE_NODE:
          return buf.push(" ", node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');
        case TEXT_NODE:
          return buf.push(node.data.replace(/[<&]/g, _xmlEncoder).replace(/]]>/g, "]]&gt;"));
        case CDATA_SECTION_NODE:
          return buf.push("<![CDATA[", node.data, "]]>");
        case COMMENT_NODE:
          return buf.push("<!--", node.data, "-->");
        case DOCUMENT_TYPE_NODE:
          var pubid = node.publicId;
          var sysid = node.systemId;
          buf.push("<!DOCTYPE ", node.name);
          if (pubid) {
            buf.push(" PUBLIC ", pubid);
            if (sysid && sysid != ".") {
              buf.push(" ", sysid);
            }
            buf.push(">");
          } else if (sysid && sysid != ".") {
            buf.push(" SYSTEM ", sysid, ">");
          } else {
            var sub = node.internalSubset;
            if (sub) {
              buf.push(" [", sub, "]");
            }
            buf.push(">");
          }
          return;
        case PROCESSING_INSTRUCTION_NODE:
          return buf.push("<?", node.target, " ", node.data, "?>");
        case ENTITY_REFERENCE_NODE:
          return buf.push("&", node.nodeName, ";");
        default:
          buf.push("??", node.nodeName);
      }
    }
    function importNode(doc, node, deep) {
      var node2;
      switch (node.nodeType) {
        case ELEMENT_NODE:
          node2 = node.cloneNode(false);
          node2.ownerDocument = doc;
        case DOCUMENT_FRAGMENT_NODE:
          break;
        case ATTRIBUTE_NODE:
          deep = true;
          break;
      }
      if (!node2) {
        node2 = node.cloneNode(false);
      }
      node2.ownerDocument = doc;
      node2.parentNode = null;
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(importNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function cloneNode(doc, node, deep) {
      var node2 = new node.constructor();
      for (var n in node) {
        var v = node[n];
        if (typeof v != "object") {
          if (v != node2[n]) {
            node2[n] = v;
          }
        }
      }
      if (node.childNodes) {
        node2.childNodes = new NodeList();
      }
      node2.ownerDocument = doc;
      switch (node2.nodeType) {
        case ELEMENT_NODE:
          var attrs = node.attributes;
          var attrs2 = node2.attributes = new NamedNodeMap();
          var len = attrs.length;
          attrs2._ownerElement = node2;
          for (var i = 0; i < len; i++) {
            node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
          }
          break;
          ;
        case ATTRIBUTE_NODE:
          deep = true;
      }
      if (deep) {
        var child = node.firstChild;
        while (child) {
          node2.appendChild(cloneNode(doc, child, deep));
          child = child.nextSibling;
        }
      }
      return node2;
    }
    function __set__(object, key, value) {
      object[key] = value;
    }
    try {
      if (Object.defineProperty) {
        let getTextContent2 = function(node) {
          switch (node.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              var buf = [];
              node = node.firstChild;
              while (node) {
                if (node.nodeType !== 7 && node.nodeType !== 8) {
                  buf.push(getTextContent2(node));
                }
                node = node.nextSibling;
              }
              return buf.join("");
            default:
              return node.nodeValue;
          }
        };
        getTextContent = getTextContent2;
        Object.defineProperty(LiveNodeList.prototype, "length", {
          get: function() {
            _updateLiveList(this);
            return this.$$length;
          }
        });
        Object.defineProperty(Node.prototype, "textContent", {
          get: function() {
            return getTextContent2(this);
          },
          set: function(data) {
            switch (this.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                while (this.firstChild) {
                  this.removeChild(this.firstChild);
                }
                if (data || String(data)) {
                  this.appendChild(this.ownerDocument.createTextNode(data));
                }
                break;
              default:
                this.data = data;
                this.value = data;
                this.nodeValue = data;
            }
          }
        });
        __set__ = function(object, key, value) {
          object["$$" + key] = value;
        };
      }
    } catch (e) {
    }
    var getTextContent;
    exports2.Node = Node;
    exports2.DOMException = DOMException;
    exports2.DOMImplementation = DOMImplementation;
    exports2.XMLSerializer = XMLSerializer;
  }
});

// node_modules/plist/lib/xmldom/dom-parser.js
var require_dom_parser = __commonJS({
  "node_modules/plist/lib/xmldom/dom-parser.js"(exports2) {
    function DOMParser(options) {
      this.options = options || { locator: {} };
    }
    DOMParser.prototype.parseFromString = function(source, mimeType) {
      var options = this.options;
      var sax2 = new XMLReader();
      var domBuilder = options.domBuilder || new DOMHandler();
      var errorHandler = options.errorHandler;
      var locator = options.locator;
      var defaultNSMap = options.xmlns || {};
      var isHTML = /\/x?html?$/.test(mimeType);
      var entityMap = isHTML ? htmlEntity.entityMap : { "lt": "<", "gt": ">", "amp": "&", "quot": '"', "apos": "'" };
      if (locator) {
        domBuilder.setDocumentLocator(locator);
      }
      sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
      sax2.domBuilder = options.domBuilder || domBuilder;
      if (isHTML) {
        defaultNSMap[""] = "http://www.w3.org/1999/xhtml";
      }
      defaultNSMap.xml = defaultNSMap.xml || "http://www.w3.org/XML/1998/namespace";
      if (source && typeof source === "string") {
        sax2.parse(source, defaultNSMap, entityMap);
      } else {
        sax2.errorHandler.error("invalid doc source");
      }
      return domBuilder.doc;
    };
    function buildErrorHandler(errorImpl, domBuilder, locator) {
      if (!errorImpl) {
        if (domBuilder instanceof DOMHandler) {
          return domBuilder;
        }
        errorImpl = domBuilder;
      }
      var errorHandler = {};
      var isCallback = errorImpl instanceof Function;
      locator = locator || {};
      function build(key) {
        var fn = errorImpl[key];
        if (!fn && isCallback) {
          fn = errorImpl.length == 2 ? function(msg) {
            errorImpl(key, msg);
          } : errorImpl;
        }
        errorHandler[key] = fn && function(msg) {
          fn("[xmldom " + key + "]	" + msg + _locator(locator));
        } || function() {
        };
      }
      build("warning");
      build("error");
      build("fatalError");
      return errorHandler;
    }
    function DOMHandler() {
      this.cdata = false;
    }
    function position(locator, node) {
      node.lineNumber = locator.lineNumber;
      node.columnNumber = locator.columnNumber;
    }
    DOMHandler.prototype = {
      startDocument: function() {
        this.doc = new DOMImplementation().createDocument(null, null, null);
        if (this.locator) {
          this.doc.documentURI = this.locator.systemId;
        }
      },
      startElement: function(namespaceURI, localName, qName, attrs) {
        var doc = this.doc;
        var el = doc.createElementNS(namespaceURI, qName || localName);
        var len = attrs.length;
        appendElement(this, el);
        this.currentElement = el;
        this.locator && position(this.locator, el);
        for (var i = 0; i < len; i++) {
          var namespaceURI = attrs.getURI(i);
          var value = attrs.getValue(i);
          var qName = attrs.getQName(i);
          var attr = doc.createAttributeNS(namespaceURI, qName);
          this.locator && position(attrs.getLocator(i), attr);
          attr.value = attr.nodeValue = value;
          el.setAttributeNode(attr);
        }
      },
      endElement: function(namespaceURI, localName, qName) {
        var current = this.currentElement;
        var tagName = current.tagName;
        this.currentElement = current.parentNode;
      },
      startPrefixMapping: function(prefix, uri) {
      },
      endPrefixMapping: function(prefix) {
      },
      processingInstruction: function(target, data) {
        var ins = this.doc.createProcessingInstruction(target, data);
        this.locator && position(this.locator, ins);
        appendElement(this, ins);
      },
      ignorableWhitespace: function(ch, start, length) {
      },
      characters: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        if (chars) {
          if (this.cdata) {
            var charNode = this.doc.createCDATASection(chars);
          } else {
            var charNode = this.doc.createTextNode(chars);
          }
          if (this.currentElement) {
            this.currentElement.appendChild(charNode);
          } else if (/^\s*$/.test(chars)) {
            this.doc.appendChild(charNode);
          }
          this.locator && position(this.locator, charNode);
        }
      },
      skippedEntity: function(name) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(locator) {
        if (this.locator = locator) {
          locator.lineNumber = 0;
        }
      },
      comment: function(chars, start, length) {
        chars = _toString.apply(this, arguments);
        var comm = this.doc.createComment(chars);
        this.locator && position(this.locator, comm);
        appendElement(this, comm);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(name, publicId, systemId) {
        var impl = this.doc.implementation;
        if (impl && impl.createDocumentType) {
          var dt = impl.createDocumentType(name, publicId, systemId);
          this.locator && position(this.locator, dt);
          appendElement(this, dt);
        }
      },
      warning: function(error) {
        console.warn("[xmldom warning]	" + error, _locator(this.locator));
      },
      error: function(error) {
        console.error("[xmldom error]	" + error, _locator(this.locator));
      },
      fatalError: function(error) {
        throw new ParseError(error, this.locator);
      }
    };
    function _locator(l) {
      if (l) {
        return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
      }
    }
    function _toString(chars, start, length) {
      if (typeof chars == "string") {
        return chars.substr(start, length);
      } else {
        if (chars.length >= start + length || start) {
          return new java.lang.String(chars, start, length) + "";
        }
        return chars;
      }
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
      DOMHandler.prototype[key] = function() {
        return null;
      };
    });
    function appendElement(hander, node) {
      if (!hander.currentElement) {
        hander.doc.appendChild(node);
      } else {
        hander.currentElement.appendChild(node);
      }
    }
    var htmlEntity = require_entities();
    var sax = require_sax();
    var XMLReader = sax.XMLReader;
    var ParseError = sax.ParseError;
    var DOMImplementation = exports2.DOMImplementation = require_dom().DOMImplementation;
    exports2.XMLSerializer = require_dom().XMLSerializer;
    exports2.DOMParser = DOMParser;
    exports2.__DOMHandler = DOMHandler;
  }
});

// node_modules/plist/lib/parse.js
var require_parse = __commonJS({
  "node_modules/plist/lib/parse.js"(exports2) {
    var DOMParser = require_dom_parser().DOMParser;
    exports2.parse = parse2;
    var TEXT_NODE = 3;
    var CDATA_NODE = 4;
    var COMMENT_NODE = 8;
    function shouldIgnoreNode(node) {
      return node.nodeType === TEXT_NODE || node.nodeType === COMMENT_NODE || node.nodeType === CDATA_NODE;
    }
    function isEmptyNode(node) {
      if (!node.childNodes || node.childNodes.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function invariant(test, message) {
      if (!test) {
        throw new Error(message);
      }
    }
    function parse2(xml) {
      var doc = new DOMParser().parseFromString(xml);
      invariant(doc.documentElement.nodeName === "plist", "malformed document. First element should be <plist>");
      var plist = parsePlistXML(doc.documentElement);
      if (plist.length == 1)
        plist = plist[0];
      return plist;
    }
    function parsePlistXML(node) {
      var i, new_obj, key, val, new_arr, res, counter, type;
      if (!node)
        return null;
      if (node.nodeName === "plist") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            new_arr.push(parsePlistXML(node.childNodes[i]));
          }
        }
        return new_arr;
      } else if (node.nodeName === "dict") {
        new_obj = {};
        key = null;
        counter = 0;
        if (isEmptyNode(node)) {
          return new_obj;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (shouldIgnoreNode(node.childNodes[i]))
            continue;
          if (counter % 2 === 0) {
            invariant(node.childNodes[i].nodeName === "key", "Missing key while parsing <dict/>.");
            key = parsePlistXML(node.childNodes[i]);
          } else {
            invariant(node.childNodes[i].nodeName !== "key", 'Unexpected key "' + parsePlistXML(node.childNodes[i]) + '" while parsing <dict/>.');
            new_obj[key] = parsePlistXML(node.childNodes[i]);
          }
          counter += 1;
        }
        if (counter % 2 === 1) {
          throw new Error('Missing value for "' + key + '" while parsing <dict/>');
        }
        return new_obj;
      } else if (node.nodeName === "array") {
        new_arr = [];
        if (isEmptyNode(node)) {
          return new_arr;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (!shouldIgnoreNode(node.childNodes[i])) {
            res = parsePlistXML(node.childNodes[i]);
            if (res != null)
              new_arr.push(res);
          }
        }
        return new_arr;
      } else if (node.nodeName === "#text") {
      } else if (node.nodeName === "key") {
        if (isEmptyNode(node)) {
          return "";
        }
        return node.childNodes[0].nodeValue;
      } else if (node.nodeName === "string") {
        res = "";
        if (isEmptyNode(node)) {
          return res;
        }
        for (i = 0; i < node.childNodes.length; i++) {
          var type = node.childNodes[i].nodeType;
          if (type === TEXT_NODE || type === CDATA_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return res;
      } else if (node.nodeName === "integer") {
        invariant(!isEmptyNode(node), 'Cannot parse "" as integer.');
        return parseInt(node.childNodes[0].nodeValue, 10);
      } else if (node.nodeName === "real") {
        invariant(!isEmptyNode(node), 'Cannot parse "" as real.');
        res = "";
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue;
          }
        }
        return parseFloat(res);
      } else if (node.nodeName === "data") {
        res = "";
        if (isEmptyNode(node)) {
          return Buffer.from(res, "base64");
        }
        for (i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].nodeType === TEXT_NODE) {
            res += node.childNodes[i].nodeValue.replace(/\s+/g, "");
          }
        }
        return Buffer.from(res, "base64");
      } else if (node.nodeName === "date") {
        invariant(!isEmptyNode(node), 'Cannot parse "" as Date.');
        return new Date(node.childNodes[0].nodeValue);
      } else if (node.nodeName === "true") {
        return true;
      } else if (node.nodeName === "false") {
        return false;
      }
    }
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports2) {
    "use strict";
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/Utility.js"(exports2, module2) {
    (function() {
      var assign, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
      assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) {
          Object.assign.apply(null, arguments);
        } else {
          for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            if (source != null) {
              for (key in source) {
                if (!hasProp.call(source, key))
                  continue;
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
      isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
      };
      isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
      };
      isArray = function(val) {
        if (isFunction(Array.isArray)) {
          return Array.isArray(val);
        } else {
          return Object.prototype.toString.call(val) === "[object Array]";
        }
      };
      isEmpty = function(val) {
        var key;
        if (isArray(val)) {
          return !val.length;
        } else {
          for (key in val) {
            if (!hasProp.call(val, key))
              continue;
            return false;
          }
          return true;
        }
      };
      isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
      };
      module2.exports.assign = assign;
      module2.exports.isFunction = isFunction;
      module2.exports.isObject = isObject;
      module2.exports.isArray = isArray;
      module2.exports.isEmpty = isEmpty;
      module2.exports.isPlainObject = isPlainObject;
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLAttribute.js"(exports2, module2) {
    (function() {
      var XMLAttribute;
      module2.exports = XMLAttribute = function() {
        function XMLAttribute2(parent, name, value) {
          this.options = parent.options;
          this.stringify = parent.stringify;
          if (name == null) {
            throw new Error("Missing attribute name of element " + parent.name);
          }
          if (value == null) {
            throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
          }
          this.name = this.stringify.attName(name);
          this.value = this.stringify.attValue(value);
        }
        XMLAttribute2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLAttribute2.prototype.toString = function(options) {
          return this.options.writer.set(options).attribute(this);
        };
        return XMLAttribute2;
      }();
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLElement.js"(exports2, module2) {
    (function() {
      var XMLAttribute, XMLElement, XMLNode, isFunction, isObject, ref, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction;
      XMLNode = require_XMLNode();
      XMLAttribute = require_XMLAttribute();
      module2.exports = XMLElement = function(superClass) {
        extend(XMLElement2, superClass);
        function XMLElement2(parent, name, attributes) {
          XMLElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing element name");
          }
          this.name = this.stringify.eleName(name);
          this.attributes = {};
          if (attributes != null) {
            this.attribute(attributes);
          }
          if (parent.isDocument) {
            this.isRoot = true;
            this.documentObject = parent;
            parent.rootObject = this;
          }
        }
        XMLElement2.prototype.clone = function() {
          var att, attName, clonedSelf, ref1;
          clonedSelf = Object.create(this);
          if (clonedSelf.isRoot) {
            clonedSelf.documentObject = null;
          }
          clonedSelf.attributes = {};
          ref1 = this.attributes;
          for (attName in ref1) {
            if (!hasProp.call(ref1, attName))
              continue;
            att = ref1[attName];
            clonedSelf.attributes[attName] = att.clone();
          }
          clonedSelf.children = [];
          this.children.forEach(function(child) {
            var clonedChild;
            clonedChild = child.clone();
            clonedChild.parent = clonedSelf;
            return clonedSelf.children.push(clonedChild);
          });
          return clonedSelf;
        };
        XMLElement2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (name != null) {
            name = name.valueOf();
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName))
                continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (!this.options.skipNullAttributes || value != null) {
              this.attributes[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLElement2.prototype.removeAttribute = function(name) {
          var attName, i, len;
          if (name == null) {
            throw new Error("Missing attribute name");
          }
          name = name.valueOf();
          if (Array.isArray(name)) {
            for (i = 0, len = name.length; i < len; i++) {
              attName = name[i];
              delete this.attributes[attName];
            }
          } else {
            delete this.attributes[name];
          }
          return this;
        };
        XMLElement2.prototype.toString = function(options) {
          return this.options.writer.set(options).element(this);
        };
        XMLElement2.prototype.att = function(name, value) {
          return this.attribute(name, value);
        };
        XMLElement2.prototype.a = function(name, value) {
          return this.attribute(name, value);
        };
        return XMLElement2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLCData.js"(exports2, module2) {
    (function() {
      var XMLCData, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLCData = function(superClass) {
        extend(XMLCData2, superClass);
        function XMLCData2(parent, text) {
          XMLCData2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing CDATA text");
          }
          this.text = this.stringify.cdata(text);
        }
        XMLCData2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLCData2.prototype.toString = function(options) {
          return this.options.writer.set(options).cdata(this);
        };
        return XMLCData2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLComment.js"(exports2, module2) {
    (function() {
      var XMLComment, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLComment = function(superClass) {
        extend(XMLComment2, superClass);
        function XMLComment2(parent, text) {
          XMLComment2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing comment text");
          }
          this.text = this.stringify.comment(text);
        }
        XMLComment2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLComment2.prototype.toString = function(options) {
          return this.options.writer.set(options).comment(this);
        };
        return XMLComment2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports2, module2) {
    (function() {
      var XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      module2.exports = XMLDeclaration = function(superClass) {
        extend(XMLDeclaration2, superClass);
        function XMLDeclaration2(parent, version, encoding, standalone) {
          var ref;
          XMLDeclaration2.__super__.constructor.call(this, parent);
          if (isObject(version)) {
            ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
          }
          if (!version) {
            version = "1.0";
          }
          this.version = this.stringify.xmlVersion(version);
          if (encoding != null) {
            this.encoding = this.stringify.xmlEncoding(encoding);
          }
          if (standalone != null) {
            this.standalone = this.stringify.xmlStandalone(standalone);
          }
        }
        XMLDeclaration2.prototype.toString = function(options) {
          return this.options.writer.set(options).declaration(this);
        };
        return XMLDeclaration2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports2, module2) {
    (function() {
      var XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLDTDAttList = function(superClass) {
        extend(XMLDTDAttList2, superClass);
        function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          XMLDTDAttList2.__super__.constructor.call(this, parent);
          if (elementName == null) {
            throw new Error("Missing DTD element name");
          }
          if (attributeName == null) {
            throw new Error("Missing DTD attribute name");
          }
          if (!attributeType) {
            throw new Error("Missing DTD attribute type");
          }
          if (!defaultValueType) {
            throw new Error("Missing DTD attribute default");
          }
          if (defaultValueType.indexOf("#") !== 0) {
            defaultValueType = "#" + defaultValueType;
          }
          if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
            throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
          }
          if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
            throw new Error("Default value only applies to #FIXED or #DEFAULT");
          }
          this.elementName = this.stringify.eleName(elementName);
          this.attributeName = this.stringify.attName(attributeName);
          this.attributeType = this.stringify.dtdAttType(attributeType);
          this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
          this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList2.prototype.toString = function(options) {
          return this.options.writer.set(options).dtdAttList(this);
        };
        return XMLDTDAttList2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports2, module2) {
    (function() {
      var XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      module2.exports = XMLDTDEntity = function(superClass) {
        extend(XMLDTDEntity2, superClass);
        function XMLDTDEntity2(parent, pe, name, value) {
          XMLDTDEntity2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing entity name");
          }
          if (value == null) {
            throw new Error("Missing entity value");
          }
          this.pe = !!pe;
          this.name = this.stringify.eleName(name);
          if (!isObject(value)) {
            this.value = this.stringify.dtdEntityValue(value);
          } else {
            if (!value.pubID && !value.sysID) {
              throw new Error("Public and/or system identifiers are required for an external entity");
            }
            if (value.pubID && !value.sysID) {
              throw new Error("System identifier is required for a public external entity");
            }
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
            if (value.nData != null) {
              this.nData = this.stringify.dtdNData(value.nData);
            }
            if (this.pe && this.nData) {
              throw new Error("Notation declaration is not allowed in a parameter entity");
            }
          }
        }
        XMLDTDEntity2.prototype.toString = function(options) {
          return this.options.writer.set(options).dtdEntity(this);
        };
        return XMLDTDEntity2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports2, module2) {
    (function() {
      var XMLDTDElement, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLDTDElement = function(superClass) {
        extend(XMLDTDElement2, superClass);
        function XMLDTDElement2(parent, name, value) {
          XMLDTDElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD element name");
          }
          if (!value) {
            value = "(#PCDATA)";
          }
          if (Array.isArray(value)) {
            value = "(" + value.join(",") + ")";
          }
          this.name = this.stringify.eleName(name);
          this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement2.prototype.toString = function(options) {
          return this.options.writer.set(options).dtdElement(this);
        };
        return XMLDTDElement2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports2, module2) {
    (function() {
      var XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLDTDNotation = function(superClass) {
        extend(XMLDTDNotation2, superClass);
        function XMLDTDNotation2(parent, name, value) {
          XMLDTDNotation2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing notation name");
          }
          if (!value.pubID && !value.sysID) {
            throw new Error("Public or system identifiers are required for an external entity");
          }
          this.name = this.stringify.eleName(name);
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
        }
        XMLDTDNotation2.prototype.toString = function(options) {
          return this.options.writer.set(options).dtdNotation(this);
        };
        return XMLDTDNotation2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDocType.js"(exports2, module2) {
    (function() {
      var XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      module2.exports = XMLDocType = function(superClass) {
        extend(XMLDocType2, superClass);
        function XMLDocType2(parent, pubID, sysID) {
          var ref, ref1;
          XMLDocType2.__super__.constructor.call(this, parent);
          this.documentObject = parent;
          if (isObject(pubID)) {
            ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
          }
          if (sysID == null) {
            ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
          }
          if (pubID != null) {
            this.pubID = this.stringify.dtdPubID(pubID);
          }
          if (sysID != null) {
            this.sysID = this.stringify.dtdSysID(sysID);
          }
        }
        XMLDocType2.prototype.element = function(name, value) {
          var child;
          child = new XMLDTDElement(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var child;
          child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.entity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, false, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.pEntity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, true, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.notation = function(name, value) {
          var child;
          child = new XMLDTDNotation(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.toString = function(options) {
          return this.options.writer.set(options).docType(this);
        };
        XMLDocType2.prototype.ele = function(name, value) {
          return this.element(name, value);
        };
        XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocType2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocType2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        XMLDocType2.prototype.up = function() {
          return this.root() || this.documentObject;
        };
        return XMLDocType2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLRaw.js"(exports2, module2) {
    (function() {
      var XMLNode, XMLRaw, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLRaw = function(superClass) {
        extend(XMLRaw2, superClass);
        function XMLRaw2(parent, text) {
          XMLRaw2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing raw text");
          }
          this.value = this.stringify.raw(text);
        }
        XMLRaw2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLRaw2.prototype.toString = function(options) {
          return this.options.writer.set(options).raw(this);
        };
        return XMLRaw2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLText.js"(exports2, module2) {
    (function() {
      var XMLNode, XMLText, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLText = function(superClass) {
        extend(XMLText2, superClass);
        function XMLText2(parent, text) {
          XMLText2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing element text");
          }
          this.value = this.stringify.eleText(text);
        }
        XMLText2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLText2.prototype.toString = function(options) {
          return this.options.writer.set(options).text(this);
        };
        return XMLText2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports2, module2) {
    (function() {
      var XMLNode, XMLProcessingInstruction, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLProcessingInstruction = function(superClass) {
        extend(XMLProcessingInstruction2, superClass);
        function XMLProcessingInstruction2(parent, target, value) {
          XMLProcessingInstruction2.__super__.constructor.call(this, parent);
          if (target == null) {
            throw new Error("Missing instruction target");
          }
          this.target = this.stringify.insTarget(target);
          if (value) {
            this.value = this.stringify.insValue(value);
          }
        }
        XMLProcessingInstruction2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLProcessingInstruction2.prototype.toString = function(options) {
          return this.options.writer.set(options).processingInstruction(this);
        };
        return XMLProcessingInstruction2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLNode.js"(exports2, module2) {
    (function() {
      var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLProcessingInstruction, XMLRaw, XMLText, isEmpty, isFunction, isObject, ref, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty;
      XMLElement = null;
      XMLCData = null;
      XMLComment = null;
      XMLDeclaration = null;
      XMLDocType = null;
      XMLRaw = null;
      XMLText = null;
      XMLProcessingInstruction = null;
      module2.exports = XMLNode = function() {
        function XMLNode2(parent) {
          this.parent = parent;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          this.children = [];
          if (!XMLElement) {
            XMLElement = require_XMLElement();
            XMLCData = require_XMLCData();
            XMLComment = require_XMLComment();
            XMLDeclaration = require_XMLDeclaration();
            XMLDocType = require_XMLDocType();
            XMLRaw = require_XMLRaw();
            XMLText = require_XMLText();
            XMLProcessingInstruction = require_XMLProcessingInstruction();
          }
        }
        XMLNode2.prototype.element = function(name, attributes, text) {
          var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
          lastChild = null;
          if (attributes == null) {
            attributes = {};
          }
          attributes = attributes.valueOf();
          if (!isObject(attributes)) {
            ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
          }
          if (name != null) {
            name = name.valueOf();
          }
          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              item = name[j];
              lastChild = this.element(item);
            }
          } else if (isFunction(name)) {
            lastChild = this.element(name.apply());
          } else if (isObject(name)) {
            for (key in name) {
              if (!hasProp.call(name, key))
                continue;
              val = name[key];
              if (isFunction(val)) {
                val = val.apply();
              }
              if (isObject(val) && isEmpty(val)) {
                val = null;
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
              } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                for (k = 0, len1 = val.length; k < len1; k++) {
                  item = val[k];
                  childNode = {};
                  childNode[key] = item;
                  lastChild = this.element(childNode);
                }
              } else if (isObject(val)) {
                lastChild = this.element(key);
                lastChild.element(val);
              } else {
                lastChild = this.element(key, val);
              }
            }
          } else {
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.text(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
              lastChild = this.cdata(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
              lastChild = this.comment(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
              lastChild = this.raw(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
              lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
            } else {
              lastChild = this.node(name, attributes, text);
            }
          }
          if (lastChild == null) {
            throw new Error("Could not create any elements with: " + name);
          }
          return lastChild;
        };
        XMLNode2.prototype.insertBefore = function(name, attributes, text) {
          var child, i, removed;
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level");
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        };
        XMLNode2.prototype.insertAfter = function(name, attributes, text) {
          var child, i, removed;
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level");
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        };
        XMLNode2.prototype.remove = function() {
          var i, ref1;
          if (this.isRoot) {
            throw new Error("Cannot remove the root element");
          }
          i = this.parent.children.indexOf(this);
          [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
          return this.parent;
        };
        XMLNode2.prototype.node = function(name, attributes, text) {
          var child, ref1;
          if (name != null) {
            name = name.valueOf();
          }
          attributes || (attributes = {});
          attributes = attributes.valueOf();
          if (!isObject(attributes)) {
            ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
          }
          child = new XMLElement(this, name, attributes);
          if (text != null) {
            child.text(text);
          }
          this.children.push(child);
          return child;
        };
        XMLNode2.prototype.text = function(value) {
          var child;
          child = new XMLText(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.cdata = function(value) {
          var child;
          child = new XMLCData(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.comment = function(value) {
          var child;
          child = new XMLComment(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.commentBefore = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.commentAfter = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.raw = function(value) {
          var child;
          child = new XMLRaw(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.instruction = function(target, value) {
          var insTarget, insValue, instruction, j, len;
          if (target != null) {
            target = target.valueOf();
          }
          if (value != null) {
            value = value.valueOf();
          }
          if (Array.isArray(target)) {
            for (j = 0, len = target.length; j < len; j++) {
              insTarget = target[j];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget))
                continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            instruction = new XMLProcessingInstruction(this, target, value);
            this.children.push(instruction);
          }
          return this;
        };
        XMLNode2.prototype.instructionBefore = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.instructionAfter = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.declaration = function(version, encoding, standalone) {
          var doc, xmldec;
          doc = this.document();
          xmldec = new XMLDeclaration(doc, version, encoding, standalone);
          if (doc.children[0] instanceof XMLDeclaration) {
            doc.children[0] = xmldec;
          } else {
            doc.children.unshift(xmldec);
          }
          return doc.root() || doc;
        };
        XMLNode2.prototype.doctype = function(pubID, sysID) {
          var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
          doc = this.document();
          doctype = new XMLDocType(doc, pubID, sysID);
          ref1 = doc.children;
          for (i = j = 0, len = ref1.length; j < len; i = ++j) {
            child = ref1[i];
            if (child instanceof XMLDocType) {
              doc.children[i] = doctype;
              return doctype;
            }
          }
          ref2 = doc.children;
          for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
            child = ref2[i];
            if (child.isRoot) {
              doc.children.splice(i, 0, doctype);
              return doctype;
            }
          }
          doc.children.push(doctype);
          return doctype;
        };
        XMLNode2.prototype.up = function() {
          if (this.isRoot) {
            throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          }
          return this.parent;
        };
        XMLNode2.prototype.root = function() {
          var node;
          node = this;
          while (node) {
            if (node.isDocument) {
              return node.rootObject;
            } else if (node.isRoot) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.document = function() {
          var node;
          node = this;
          while (node) {
            if (node.isDocument) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.end = function(options) {
          return this.document().end(options);
        };
        XMLNode2.prototype.prev = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i < 1) {
            throw new Error("Already at the first node");
          }
          return this.parent.children[i - 1];
        };
        XMLNode2.prototype.next = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i === -1 || i === this.parent.children.length - 1) {
            throw new Error("Already at the last node");
          }
          return this.parent.children[i + 1];
        };
        XMLNode2.prototype.importDocument = function(doc) {
          var clonedRoot;
          clonedRoot = doc.root().clone();
          clonedRoot.parent = this;
          clonedRoot.isRoot = false;
          this.children.push(clonedRoot);
          return this;
        };
        XMLNode2.prototype.ele = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.doc = function() {
          return this.document();
        };
        XMLNode2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLNode2.prototype.dtd = function(pubID, sysID) {
          return this.doctype(pubID, sysID);
        };
        XMLNode2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLNode2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.u = function() {
          return this.up();
        };
        XMLNode2.prototype.importXMLBuilder = function(doc) {
          return this.importDocument(doc);
        };
        return XMLNode2;
      }();
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLStringifier.js"(exports2, module2) {
    (function() {
      var XMLStringifier, bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      }, hasProp = {}.hasOwnProperty;
      module2.exports = XMLStringifier = function() {
        function XMLStringifier2(options) {
          this.assertLegalChar = bind(this.assertLegalChar, this);
          var key, ref, value;
          options || (options = {});
          this.noDoubleEncoding = options.noDoubleEncoding;
          ref = options.stringify || {};
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this[key] = value;
          }
        }
        XMLStringifier2.prototype.eleName = function(val) {
          val = "" + val || "";
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.eleText = function(val) {
          val = "" + val || "";
          return this.assertLegalChar(this.elEscape(val));
        };
        XMLStringifier2.prototype.cdata = function(val) {
          val = "" + val || "";
          val = val.replace("]]>", "]]]]><![CDATA[>");
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.comment = function(val) {
          val = "" + val || "";
          if (val.match(/--/)) {
            throw new Error("Comment text cannot contain double-hypen: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.raw = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.attName = function(val) {
          return val = "" + val || "";
        };
        XMLStringifier2.prototype.attValue = function(val) {
          val = "" + val || "";
          return this.attEscape(val);
        };
        XMLStringifier2.prototype.insTarget = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.insValue = function(val) {
          val = "" + val || "";
          if (val.match(/\?>/)) {
            throw new Error("Invalid processing instruction value: " + val);
          }
          return val;
        };
        XMLStringifier2.prototype.xmlVersion = function(val) {
          val = "" + val || "";
          if (!val.match(/1\.[0-9]+/)) {
            throw new Error("Invalid version number: " + val);
          }
          return val;
        };
        XMLStringifier2.prototype.xmlEncoding = function(val) {
          val = "" + val || "";
          if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
            throw new Error("Invalid encoding: " + val);
          }
          return val;
        };
        XMLStringifier2.prototype.xmlStandalone = function(val) {
          if (val) {
            return "yes";
          } else {
            return "no";
          }
        };
        XMLStringifier2.prototype.dtdPubID = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.dtdSysID = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.dtdElementValue = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.dtdAttType = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.dtdAttDefault = function(val) {
          if (val != null) {
            return "" + val || "";
          } else {
            return val;
          }
        };
        XMLStringifier2.prototype.dtdEntityValue = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.dtdNData = function(val) {
          return "" + val || "";
        };
        XMLStringifier2.prototype.convertAttKey = "@";
        XMLStringifier2.prototype.convertPIKey = "?";
        XMLStringifier2.prototype.convertTextKey = "#text";
        XMLStringifier2.prototype.convertCDataKey = "#cdata";
        XMLStringifier2.prototype.convertCommentKey = "#comment";
        XMLStringifier2.prototype.convertRawKey = "#raw";
        XMLStringifier2.prototype.assertLegalChar = function(str) {
          var res;
          res = str.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
          if (res) {
            throw new Error("Invalid character in string: " + str + " at index " + res.index);
          }
          return str;
        };
        XMLStringifier2.prototype.elEscape = function(str) {
          var ampregex;
          ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        };
        XMLStringifier2.prototype.attEscape = function(str) {
          var ampregex;
          ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        };
        return XMLStringifier2;
      }();
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports2, module2) {
    (function() {
      var XMLWriterBase, hasProp = {}.hasOwnProperty;
      module2.exports = XMLWriterBase = function() {
        function XMLWriterBase2(options) {
          var key, ref, ref1, ref2, ref3, ref4, ref5, ref6, value;
          options || (options = {});
          this.pretty = options.pretty || false;
          this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
          if (this.pretty) {
            this.indent = (ref1 = options.indent) != null ? ref1 : "  ";
            this.newline = (ref2 = options.newline) != null ? ref2 : "\n";
            this.offset = (ref3 = options.offset) != null ? ref3 : 0;
            this.dontprettytextnodes = (ref4 = options.dontprettytextnodes) != null ? ref4 : 0;
          } else {
            this.indent = "";
            this.newline = "";
            this.offset = 0;
            this.dontprettytextnodes = 0;
          }
          this.spacebeforeslash = (ref5 = options.spacebeforeslash) != null ? ref5 : "";
          if (this.spacebeforeslash === true) {
            this.spacebeforeslash = " ";
          }
          this.newlinedefault = this.newline;
          this.prettydefault = this.pretty;
          ref6 = options.writer || {};
          for (key in ref6) {
            if (!hasProp.call(ref6, key))
              continue;
            value = ref6[key];
            this[key] = value;
          }
        }
        XMLWriterBase2.prototype.set = function(options) {
          var key, ref, value;
          options || (options = {});
          if ("pretty" in options) {
            this.pretty = options.pretty;
          }
          if ("allowEmpty" in options) {
            this.allowEmpty = options.allowEmpty;
          }
          if (this.pretty) {
            this.indent = "indent" in options ? options.indent : "  ";
            this.newline = "newline" in options ? options.newline : "\n";
            this.offset = "offset" in options ? options.offset : 0;
            this.dontprettytextnodes = "dontprettytextnodes" in options ? options.dontprettytextnodes : 0;
          } else {
            this.indent = "";
            this.newline = "";
            this.offset = 0;
            this.dontprettytextnodes = 0;
          }
          this.spacebeforeslash = "spacebeforeslash" in options ? options.spacebeforeslash : "";
          if (this.spacebeforeslash === true) {
            this.spacebeforeslash = " ";
          }
          this.newlinedefault = this.newline;
          this.prettydefault = this.pretty;
          ref = options.writer || {};
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this[key] = value;
          }
          return this;
        };
        XMLWriterBase2.prototype.space = function(level) {
          var indent;
          if (this.pretty) {
            indent = (level || 0) + this.offset + 1;
            if (indent > 0) {
              return new Array(indent).join(this.indent);
            } else {
              return "";
            }
          } else {
            return "";
          }
        };
        return XMLWriterBase2;
      }();
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports2, module2) {
    (function() {
      var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLText, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLWriterBase = require_XMLWriterBase();
      module2.exports = XMLStringWriter = function(superClass) {
        extend(XMLStringWriter2, superClass);
        function XMLStringWriter2(options) {
          XMLStringWriter2.__super__.constructor.call(this, options);
        }
        XMLStringWriter2.prototype.document = function(doc) {
          var child, i, len, r, ref;
          this.textispresent = false;
          r = "";
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += function() {
              switch (false) {
                case !(child instanceof XMLDeclaration):
                  return this.declaration(child);
                case !(child instanceof XMLDocType):
                  return this.docType(child);
                case !(child instanceof XMLComment):
                  return this.comment(child);
                case !(child instanceof XMLProcessingInstruction):
                  return this.processingInstruction(child);
                default:
                  return this.element(child, 0);
              }
            }.call(this);
          }
          if (this.pretty && r.slice(-this.newline.length) === this.newline) {
            r = r.slice(0, -this.newline.length);
          }
          return r;
        };
        XMLStringWriter2.prototype.attribute = function(att) {
          return " " + att.name + '="' + att.value + '"';
        };
        XMLStringWriter2.prototype.cdata = function(node, level) {
          return this.space(level) + "<![CDATA[" + node.text + "]]>" + this.newline;
        };
        XMLStringWriter2.prototype.comment = function(node, level) {
          return this.space(level) + "<!-- " + node.text + " -->" + this.newline;
        };
        XMLStringWriter2.prototype.declaration = function(node, level) {
          var r;
          r = this.space(level);
          r += '<?xml version="' + node.version + '"';
          if (node.encoding != null) {
            r += ' encoding="' + node.encoding + '"';
          }
          if (node.standalone != null) {
            r += ' standalone="' + node.standalone + '"';
          }
          r += this.spacebeforeslash + "?>";
          r += this.newline;
          return r;
        };
        XMLStringWriter2.prototype.docType = function(node, level) {
          var child, i, len, r, ref;
          level || (level = 0);
          r = this.space(level);
          r += "<!DOCTYPE " + node.root().name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children.length > 0) {
            r += " [";
            r += this.newline;
            ref = node.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              r += function() {
                switch (false) {
                  case !(child instanceof XMLDTDAttList):
                    return this.dtdAttList(child, level + 1);
                  case !(child instanceof XMLDTDElement):
                    return this.dtdElement(child, level + 1);
                  case !(child instanceof XMLDTDEntity):
                    return this.dtdEntity(child, level + 1);
                  case !(child instanceof XMLDTDNotation):
                    return this.dtdNotation(child, level + 1);
                  case !(child instanceof XMLCData):
                    return this.cdata(child, level + 1);
                  case !(child instanceof XMLComment):
                    return this.comment(child, level + 1);
                  case !(child instanceof XMLProcessingInstruction):
                    return this.processingInstruction(child, level + 1);
                  default:
                    throw new Error("Unknown DTD node type: " + child.constructor.name);
                }
              }.call(this);
            }
            r += "]";
          }
          r += this.spacebeforeslash + ">";
          r += this.newline;
          return r;
        };
        XMLStringWriter2.prototype.element = function(node, level) {
          var att, child, i, j, len, len1, name, r, ref, ref1, ref2, space, textispresentwasset;
          level || (level = 0);
          textispresentwasset = false;
          if (this.textispresent) {
            this.newline = "";
            this.pretty = false;
          } else {
            this.newline = this.newlinedefault;
            this.pretty = this.prettydefault;
          }
          space = this.space(level);
          r = "";
          r += space + "<" + node.name;
          ref = node.attributes;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            r += this.attribute(att);
          }
          if (node.children.length === 0 || node.children.every(function(e) {
            return e.value === "";
          })) {
            if (this.allowEmpty) {
              r += "></" + node.name + ">" + this.newline;
            } else {
              r += this.spacebeforeslash + "/>" + this.newline;
            }
          } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
            r += ">";
            r += node.children[0].value;
            r += "</" + node.name + ">" + this.newline;
          } else {
            if (this.dontprettytextnodes) {
              ref1 = node.children;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
                if (child.value != null) {
                  this.textispresent++;
                  textispresentwasset = true;
                  break;
                }
              }
            }
            if (this.textispresent) {
              this.newline = "";
              this.pretty = false;
              space = this.space(level);
            }
            r += ">" + this.newline;
            ref2 = node.children;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              child = ref2[j];
              r += function() {
                switch (false) {
                  case !(child instanceof XMLCData):
                    return this.cdata(child, level + 1);
                  case !(child instanceof XMLComment):
                    return this.comment(child, level + 1);
                  case !(child instanceof XMLElement):
                    return this.element(child, level + 1);
                  case !(child instanceof XMLRaw):
                    return this.raw(child, level + 1);
                  case !(child instanceof XMLText):
                    return this.text(child, level + 1);
                  case !(child instanceof XMLProcessingInstruction):
                    return this.processingInstruction(child, level + 1);
                  default:
                    throw new Error("Unknown XML node type: " + child.constructor.name);
                }
              }.call(this);
            }
            if (textispresentwasset) {
              this.textispresent--;
            }
            if (!this.textispresent) {
              this.newline = this.newlinedefault;
              this.pretty = this.prettydefault;
            }
            r += space + "</" + node.name + ">" + this.newline;
          }
          return r;
        };
        XMLStringWriter2.prototype.processingInstruction = function(node, level) {
          var r;
          r = this.space(level) + "<?" + node.target;
          if (node.value) {
            r += " " + node.value;
          }
          r += this.spacebeforeslash + "?>" + this.newline;
          return r;
        };
        XMLStringWriter2.prototype.raw = function(node, level) {
          return this.space(level) + node.value + this.newline;
        };
        XMLStringWriter2.prototype.text = function(node, level) {
          return this.space(level) + node.value + this.newline;
        };
        XMLStringWriter2.prototype.dtdAttList = function(node, level) {
          var r;
          r = this.space(level) + "<!ATTLIST " + node.elementName + " " + node.attributeName + " " + node.attributeType;
          if (node.defaultValueType !== "#DEFAULT") {
            r += " " + node.defaultValueType;
          }
          if (node.defaultValue) {
            r += ' "' + node.defaultValue + '"';
          }
          r += this.spacebeforeslash + ">" + this.newline;
          return r;
        };
        XMLStringWriter2.prototype.dtdElement = function(node, level) {
          return this.space(level) + "<!ELEMENT " + node.name + " " + node.value + this.spacebeforeslash + ">" + this.newline;
        };
        XMLStringWriter2.prototype.dtdEntity = function(node, level) {
          var r;
          r = this.space(level) + "<!ENTITY";
          if (node.pe) {
            r += " %";
          }
          r += " " + node.name;
          if (node.value) {
            r += ' "' + node.value + '"';
          } else {
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.nData) {
              r += " NDATA " + node.nData;
            }
          }
          r += this.spacebeforeslash + ">" + this.newline;
          return r;
        };
        XMLStringWriter2.prototype.dtdNotation = function(node, level) {
          var r;
          r = this.space(level) + "<!NOTATION " + node.name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.pubID) {
            r += ' PUBLIC "' + node.pubID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          r += this.spacebeforeslash + ">" + this.newline;
          return r;
        };
        XMLStringWriter2.prototype.openNode = function(node, level) {
          var att, name, r, ref;
          level || (level = 0);
          if (node instanceof XMLElement) {
            r = this.space(level) + "<" + node.name;
            ref = node.attributes;
            for (name in ref) {
              if (!hasProp.call(ref, name))
                continue;
              att = ref[name];
              r += this.attribute(att);
            }
            r += (node.children ? ">" : "/>") + this.newline;
            return r;
          } else {
            r = this.space(level) + "<!DOCTYPE " + node.rootNodeName;
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            r += (node.children ? " [" : ">") + this.newline;
            return r;
          }
        };
        XMLStringWriter2.prototype.closeNode = function(node, level) {
          level || (level = 0);
          switch (false) {
            case !(node instanceof XMLElement):
              return this.space(level) + "</" + node.name + ">" + this.newline;
            case !(node instanceof XMLDocType):
              return this.space(level) + "]>" + this.newline;
          }
        };
        return XMLStringWriter2;
      }(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDocument.js"(exports2, module2) {
    (function() {
      var XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isPlainObject = require_Utility().isPlainObject;
      XMLNode = require_XMLNode();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module2.exports = XMLDocument = function(superClass) {
        extend(XMLDocument2, superClass);
        function XMLDocument2(options) {
          XMLDocument2.__super__.constructor.call(this, null);
          options || (options = {});
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.stringify = new XMLStringifier(options);
          this.isDocument = true;
        }
        XMLDocument2.prototype.end = function(writer) {
          var writerOptions;
          if (!writer) {
            writer = this.options.writer;
          } else if (isPlainObject(writer)) {
            writerOptions = writer;
            writer = this.options.writer.set(writerOptions);
          }
          return writer.document(this);
        };
        XMLDocument2.prototype.toString = function(options) {
          return this.options.writer.set(options).document(this);
        };
        return XMLDocument2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports2, module2) {
    (function() {
      var XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;
      XMLElement = require_XMLElement();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLAttribute = require_XMLAttribute();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module2.exports = XMLDocumentCB = function() {
        function XMLDocumentCB2(options, onData, onEnd) {
          var writerOptions;
          options || (options = {});
          if (!options.writer) {
            options.writer = new XMLStringWriter(options);
          } else if (isPlainObject(options.writer)) {
            writerOptions = options.writer;
            options.writer = new XMLStringWriter(writerOptions);
          }
          this.options = options;
          this.writer = options.writer;
          this.stringify = new XMLStringifier(options);
          this.onDataCallback = onData || function() {
          };
          this.onEndCallback = onEnd || function() {
          };
          this.currentNode = null;
          this.currentLevel = -1;
          this.openTags = {};
          this.documentStarted = false;
          this.documentCompleted = false;
          this.root = null;
        }
        XMLDocumentCB2.prototype.node = function(name, attributes, text) {
          var ref1;
          if (name == null) {
            throw new Error("Missing node name");
          }
          if (this.root && this.currentLevel === -1) {
            throw new Error("Document can only have one root node");
          }
          this.openCurrent();
          name = name.valueOf();
          if (attributes == null) {
            attributes = {};
          }
          attributes = attributes.valueOf();
          if (!isObject(attributes)) {
            ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
          }
          this.currentNode = new XMLElement(this, name, attributes);
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          if (text != null) {
            this.text(text);
          }
          return this;
        };
        XMLDocumentCB2.prototype.element = function(name, attributes, text) {
          if (this.currentNode && this.currentNode instanceof XMLDocType) {
            return this.dtdElement.apply(this, arguments);
          } else {
            return this.node(name, attributes, text);
          }
        };
        XMLDocumentCB2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (!this.currentNode || this.currentNode.children) {
            throw new Error("att() can only be used immediately after an ele() call in callback mode");
          }
          if (name != null) {
            name = name.valueOf();
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName))
                continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (!this.options.skipNullAttributes || value != null) {
              this.currentNode.attributes[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.text = function(value) {
          var node;
          this.openCurrent();
          node = new XMLText(this, value);
          this.onData(this.writer.text(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.cdata = function(value) {
          var node;
          this.openCurrent();
          node = new XMLCData(this, value);
          this.onData(this.writer.cdata(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.comment = function(value) {
          var node;
          this.openCurrent();
          node = new XMLComment(this, value);
          this.onData(this.writer.comment(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.raw = function(value) {
          var node;
          this.openCurrent();
          node = new XMLRaw(this, value);
          this.onData(this.writer.raw(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.instruction = function(target, value) {
          var i, insTarget, insValue, len, node;
          this.openCurrent();
          if (target != null) {
            target = target.valueOf();
          }
          if (value != null) {
            value = value.valueOf();
          }
          if (Array.isArray(target)) {
            for (i = 0, len = target.length; i < len; i++) {
              insTarget = target[i];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget))
                continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            node = new XMLProcessingInstruction(this, target, value);
            this.onData(this.writer.processingInstruction(node, this.currentLevel + 1));
          }
          return this;
        };
        XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
          var node;
          this.openCurrent();
          if (this.documentStarted) {
            throw new Error("declaration() must be the first node");
          }
          node = new XMLDeclaration(this, version, encoding, standalone);
          this.onData(this.writer.declaration(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
          this.openCurrent();
          if (root == null) {
            throw new Error("Missing root node name");
          }
          if (this.root) {
            throw new Error("dtd() must come before the root node");
          }
          this.currentNode = new XMLDocType(this, pubID, sysID);
          this.currentNode.rootNodeName = root;
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          return this;
        };
        XMLDocumentCB2.prototype.dtdElement = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDElement(this, name, value);
          this.onData(this.writer.dtdElement(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var node;
          this.openCurrent();
          node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.onData(this.writer.dtdAttList(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.entity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, false, name, value);
          this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.pEntity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, true, name, value);
          this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.notation = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDNotation(this, name, value);
          this.onData(this.writer.dtdNotation(node, this.currentLevel + 1));
          return this;
        };
        XMLDocumentCB2.prototype.up = function() {
          if (this.currentLevel < 0) {
            throw new Error("The document node has no parent");
          }
          if (this.currentNode) {
            if (this.currentNode.children) {
              this.closeNode(this.currentNode);
            } else {
              this.openNode(this.currentNode);
            }
            this.currentNode = null;
          } else {
            this.closeNode(this.openTags[this.currentLevel]);
          }
          delete this.openTags[this.currentLevel];
          this.currentLevel--;
          return this;
        };
        XMLDocumentCB2.prototype.end = function() {
          while (this.currentLevel >= 0) {
            this.up();
          }
          return this.onEnd();
        };
        XMLDocumentCB2.prototype.openCurrent = function() {
          if (this.currentNode) {
            this.currentNode.children = true;
            return this.openNode(this.currentNode);
          }
        };
        XMLDocumentCB2.prototype.openNode = function(node) {
          if (!node.isOpen) {
            if (!this.root && this.currentLevel === 0 && node instanceof XMLElement) {
              this.root = node;
            }
            this.onData(this.writer.openNode(node, this.currentLevel));
            return node.isOpen = true;
          }
        };
        XMLDocumentCB2.prototype.closeNode = function(node) {
          if (!node.isClosed) {
            this.onData(this.writer.closeNode(node, this.currentLevel));
            return node.isClosed = true;
          }
        };
        XMLDocumentCB2.prototype.onData = function(chunk) {
          this.documentStarted = true;
          return this.onDataCallback(chunk);
        };
        XMLDocumentCB2.prototype.onEnd = function() {
          this.documentCompleted = true;
          return this.onEndCallback();
        };
        XMLDocumentCB2.prototype.ele = function() {
          return this.element.apply(this, arguments);
        };
        XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
          return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLDocumentCB2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLDocumentCB2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.att = function() {
          if (this.currentNode && this.currentNode instanceof XMLDocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.a = function() {
          if (this.currentNode && this.currentNode instanceof XMLDocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocumentCB2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocumentCB2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        return XMLDocumentCB2;
      }();
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports2, module2) {
    (function() {
      var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStreamWriter, XMLText, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLWriterBase = require_XMLWriterBase();
      module2.exports = XMLStreamWriter = function(superClass) {
        extend(XMLStreamWriter2, superClass);
        function XMLStreamWriter2(stream, options) {
          XMLStreamWriter2.__super__.constructor.call(this, options);
          this.stream = stream;
        }
        XMLStreamWriter2.prototype.document = function(doc) {
          var child, i, j, len, len1, ref, ref1, results;
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            child.isLastRootNode = false;
          }
          doc.children[doc.children.length - 1].isLastRootNode = true;
          ref1 = doc.children;
          results = [];
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            child = ref1[j];
            switch (false) {
              case !(child instanceof XMLDeclaration):
                results.push(this.declaration(child));
                break;
              case !(child instanceof XMLDocType):
                results.push(this.docType(child));
                break;
              case !(child instanceof XMLComment):
                results.push(this.comment(child));
                break;
              case !(child instanceof XMLProcessingInstruction):
                results.push(this.processingInstruction(child));
                break;
              default:
                results.push(this.element(child));
            }
          }
          return results;
        };
        XMLStreamWriter2.prototype.attribute = function(att) {
          return this.stream.write(" " + att.name + '="' + att.value + '"');
        };
        XMLStreamWriter2.prototype.cdata = function(node, level) {
          return this.stream.write(this.space(level) + "<![CDATA[" + node.text + "]]>" + this.endline(node));
        };
        XMLStreamWriter2.prototype.comment = function(node, level) {
          return this.stream.write(this.space(level) + "<!-- " + node.text + " -->" + this.endline(node));
        };
        XMLStreamWriter2.prototype.declaration = function(node, level) {
          this.stream.write(this.space(level));
          this.stream.write('<?xml version="' + node.version + '"');
          if (node.encoding != null) {
            this.stream.write(' encoding="' + node.encoding + '"');
          }
          if (node.standalone != null) {
            this.stream.write(' standalone="' + node.standalone + '"');
          }
          this.stream.write(this.spacebeforeslash + "?>");
          return this.stream.write(this.endline(node));
        };
        XMLStreamWriter2.prototype.docType = function(node, level) {
          var child, i, len, ref;
          level || (level = 0);
          this.stream.write(this.space(level));
          this.stream.write("<!DOCTYPE " + node.root().name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.children.length > 0) {
            this.stream.write(" [");
            this.stream.write(this.endline(node));
            ref = node.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              switch (false) {
                case !(child instanceof XMLDTDAttList):
                  this.dtdAttList(child, level + 1);
                  break;
                case !(child instanceof XMLDTDElement):
                  this.dtdElement(child, level + 1);
                  break;
                case !(child instanceof XMLDTDEntity):
                  this.dtdEntity(child, level + 1);
                  break;
                case !(child instanceof XMLDTDNotation):
                  this.dtdNotation(child, level + 1);
                  break;
                case !(child instanceof XMLCData):
                  this.cdata(child, level + 1);
                  break;
                case !(child instanceof XMLComment):
                  this.comment(child, level + 1);
                  break;
                case !(child instanceof XMLProcessingInstruction):
                  this.processingInstruction(child, level + 1);
                  break;
                default:
                  throw new Error("Unknown DTD node type: " + child.constructor.name);
              }
            }
            this.stream.write("]");
          }
          this.stream.write(this.spacebeforeslash + ">");
          return this.stream.write(this.endline(node));
        };
        XMLStreamWriter2.prototype.element = function(node, level) {
          var att, child, i, len, name, ref, ref1, space;
          level || (level = 0);
          space = this.space(level);
          this.stream.write(space + "<" + node.name);
          ref = node.attributes;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            this.attribute(att);
          }
          if (node.children.length === 0 || node.children.every(function(e) {
            return e.value === "";
          })) {
            if (this.allowEmpty) {
              this.stream.write("></" + node.name + ">");
            } else {
              this.stream.write(this.spacebeforeslash + "/>");
            }
          } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
            this.stream.write(">");
            this.stream.write(node.children[0].value);
            this.stream.write("</" + node.name + ">");
          } else {
            this.stream.write(">" + this.newline);
            ref1 = node.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              switch (false) {
                case !(child instanceof XMLCData):
                  this.cdata(child, level + 1);
                  break;
                case !(child instanceof XMLComment):
                  this.comment(child, level + 1);
                  break;
                case !(child instanceof XMLElement):
                  this.element(child, level + 1);
                  break;
                case !(child instanceof XMLRaw):
                  this.raw(child, level + 1);
                  break;
                case !(child instanceof XMLText):
                  this.text(child, level + 1);
                  break;
                case !(child instanceof XMLProcessingInstruction):
                  this.processingInstruction(child, level + 1);
                  break;
                default:
                  throw new Error("Unknown XML node type: " + child.constructor.name);
              }
            }
            this.stream.write(space + "</" + node.name + ">");
          }
          return this.stream.write(this.endline(node));
        };
        XMLStreamWriter2.prototype.processingInstruction = function(node, level) {
          this.stream.write(this.space(level) + "<?" + node.target);
          if (node.value) {
            this.stream.write(" " + node.value);
          }
          return this.stream.write(this.spacebeforeslash + "?>" + this.endline(node));
        };
        XMLStreamWriter2.prototype.raw = function(node, level) {
          return this.stream.write(this.space(level) + node.value + this.endline(node));
        };
        XMLStreamWriter2.prototype.text = function(node, level) {
          return this.stream.write(this.space(level) + node.value + this.endline(node));
        };
        XMLStreamWriter2.prototype.dtdAttList = function(node, level) {
          this.stream.write(this.space(level) + "<!ATTLIST " + node.elementName + " " + node.attributeName + " " + node.attributeType);
          if (node.defaultValueType !== "#DEFAULT") {
            this.stream.write(" " + node.defaultValueType);
          }
          if (node.defaultValue) {
            this.stream.write(' "' + node.defaultValue + '"');
          }
          return this.stream.write(this.spacebeforeslash + ">" + this.endline(node));
        };
        XMLStreamWriter2.prototype.dtdElement = function(node, level) {
          this.stream.write(this.space(level) + "<!ELEMENT " + node.name + " " + node.value);
          return this.stream.write(this.spacebeforeslash + ">" + this.endline(node));
        };
        XMLStreamWriter2.prototype.dtdEntity = function(node, level) {
          this.stream.write(this.space(level) + "<!ENTITY");
          if (node.pe) {
            this.stream.write(" %");
          }
          this.stream.write(" " + node.name);
          if (node.value) {
            this.stream.write(' "' + node.value + '"');
          } else {
            if (node.pubID && node.sysID) {
              this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            } else if (node.sysID) {
              this.stream.write(' SYSTEM "' + node.sysID + '"');
            }
            if (node.nData) {
              this.stream.write(" NDATA " + node.nData);
            }
          }
          return this.stream.write(this.spacebeforeslash + ">" + this.endline(node));
        };
        XMLStreamWriter2.prototype.dtdNotation = function(node, level) {
          this.stream.write(this.space(level) + "<!NOTATION " + node.name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.pubID) {
            this.stream.write(' PUBLIC "' + node.pubID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          return this.stream.write(this.spacebeforeslash + ">" + this.endline(node));
        };
        XMLStreamWriter2.prototype.endline = function(node) {
          if (!node.isLastRootNode) {
            return this.newline;
          } else {
            return "";
          }
        };
        return XMLStreamWriter2;
      }(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/plist/node_modules/xmlbuilder/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/plist/node_modules/xmlbuilder/lib/index.js"(exports2, module2) {
    (function() {
      var XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
      ref = require_Utility(), assign = ref.assign, isFunction = ref.isFunction;
      XMLDocument = require_XMLDocument();
      XMLDocumentCB = require_XMLDocumentCB();
      XMLStringWriter = require_XMLStringWriter();
      XMLStreamWriter = require_XMLStreamWriter();
      module2.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
          throw new Error("Root element needs a name");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
          doc.declaration(options);
          if (options.pubID != null || options.sysID != null) {
            doc.doctype(options);
          }
        }
        return root;
      };
      module2.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
          ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
          options = {};
        }
        if (onData) {
          return new XMLDocumentCB(options, onData, onEnd);
        } else {
          return new XMLDocument(options);
        }
      };
      module2.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
      };
      module2.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
      };
    }).call(exports2);
  }
});

// node_modules/plist/lib/build.js
var require_build = __commonJS({
  "node_modules/plist/lib/build.js"(exports2) {
    var base64 = require_base64_js();
    var xmlbuilder = require_lib2();
    exports2.build = build;
    function ISODateString(d) {
      function pad(n) {
        return n < 10 ? "0" + n : n;
      }
      return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "Z";
    }
    var toString = Object.prototype.toString;
    function type(obj) {
      var m = toString.call(obj).match(/\[object (.*)\]/);
      return m ? m[1] : m;
    }
    function build(obj, opts) {
      var XMLHDR = {
        version: "1.0",
        encoding: "UTF-8"
      };
      var XMLDTD = {
        pubid: "-//Apple//DTD PLIST 1.0//EN",
        sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
      };
      var doc = xmlbuilder.create("plist");
      doc.dec(XMLHDR.version, XMLHDR.encoding, XMLHDR.standalone);
      doc.dtd(XMLDTD.pubid, XMLDTD.sysid);
      doc.att("version", "1.0");
      walk_obj(obj, doc);
      if (!opts)
        opts = {};
      opts.pretty = opts.pretty !== false;
      return doc.end(opts);
    }
    function walk_obj(next, next_child) {
      var tag_type, i, prop;
      var name = type(next);
      if (name == "Undefined") {
        return;
      } else if (Array.isArray(next)) {
        next_child = next_child.ele("array");
        for (i = 0; i < next.length; i++) {
          walk_obj(next[i], next_child);
        }
      } else if (Buffer.isBuffer(next)) {
        next_child.ele("data").raw(next.toString("base64"));
      } else if (name == "Object") {
        next_child = next_child.ele("dict");
        for (prop in next) {
          if (next.hasOwnProperty(prop)) {
            next_child.ele("key").txt(prop);
            walk_obj(next[prop], next_child);
          }
        }
      } else if (name == "Number") {
        tag_type = next % 1 === 0 ? "integer" : "real";
        next_child.ele(tag_type).txt(next.toString());
      } else if (name == "Date") {
        next_child.ele("date").txt(ISODateString(new Date(next)));
      } else if (name == "Boolean") {
        next_child.ele(next ? "true" : "false");
      } else if (name == "String") {
        next_child.ele("string").txt(next);
      } else if (name == "ArrayBuffer") {
        next_child.ele("data").raw(base64.fromByteArray(next));
      } else if (next && next.buffer && type(next.buffer) == "ArrayBuffer") {
        next_child.ele("data").raw(base64.fromByteArray(new Uint8Array(next.buffer), next_child));
      }
    }
  }
});

// node_modules/plist/index.js
var require_plist = __commonJS({
  "node_modules/plist/index.js"(exports2) {
    var parserFunctions = require_parse();
    Object.keys(parserFunctions).forEach(function(k) {
      exports2[k] = parserFunctions[k];
    });
    var builderFunctions = require_build();
    Object.keys(builderFunctions).forEach(function(k) {
      exports2[k] = builderFunctions[k];
    });
  }
});

// node_modules/get-mac-apps/getApps.js
var require_getApps = __commonJS({
  "node_modules/get-mac-apps/getApps.js"(exports2, module2) {
    var { spawn } = require("child_process");
    var plist = require_plist();
    module2.exports = getApps = (resolve, reject, filterByAppName = false) => {
      let resultBuffer = new Buffer.from([]);
      const profileInstalledApps = spawn("/usr/sbin/system_profiler", [
        "-xml",
        "-detailLevel",
        "mini",
        "SPApplicationsDataType"
      ]);
      profileInstalledApps.stdout.on("data", (chunckBuffer) => {
        resultBuffer = Buffer.concat([resultBuffer, chunckBuffer]);
      });
      profileInstalledApps.on("exit", (exitCode) => {
        if (exitCode !== 0) {
          reject([]);
          return;
        }
        try {
          const [installedApps] = plist.parse(resultBuffer.toString());
          if (!filterByAppName)
            return resolve(installedApps._items);
          return resolve(installedApps._items.filter((apps) => apps._name === filterByAppName).length !== 0);
        } catch (err) {
          reject(err);
        }
      });
      profileInstalledApps.on("error", (err) => {
        reject(err);
      });
    };
  }
});

// node_modules/get-mac-apps/index.js
var require_get_mac_apps = __commonJS({
  "node_modules/get-mac-apps/index.js"(exports2, module2) {
    var getApps5 = require_getApps();
    module2.exports = {
      getApps: () => {
        return new Promise((resolve, reject) => getApps5(resolve, reject));
      },
      isInstalled: (appName) => {
        return new Promise((resolve, reject) => getApps5(resolve, reject, appName));
      }
    };
  }
});

// packages/main/src/shortcut/darwin/index.ts
var darwin_exports = {};
__export(darwin_exports, {
  default: () => getApps3
});
function getApps3() {
  return new Promise((resolve, reject) => {
    try {
      import_get_mac_apps.default.getApps().then(async (apps) => {
        const nodes = apps.map((app) => {
          return {
            name: app._name,
            description: app.path,
            exec: app.path
          };
        });
        resolve(nodes);
      });
    } catch (error) {
      reject(error);
    }
  });
}
var import_get_mac_apps;
var init_darwin = __esm({
  "packages/main/src/shortcut/darwin/index.ts"() {
    import_get_mac_apps = __toModule(require_get_mac_apps());
  }
});

// packages/main/src/shortcut/index.ts
async function platform() {
  let fn;
  if (process.platform) {
    fn = await Promise.resolve().then(() => (init_win32(), win32_exports));
  } else if (process.platform == "darwin") {
    fn = await Promise.resolve().then(() => (init_darwin(), darwin_exports));
  }
  return fn.default;
}
async function getApps4() {
  const nativeFun = await platform();
  return nativeFun.call();
}

// packages/main/src/shortcut/test.ts
getApps4().then(console.log);
