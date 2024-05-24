---
title: Downloads
titleTemplate: Frequently Asked Questions
description: Frequently Asked Question about Downloads.
---

# Downloads
Frequently Asked Question about Downloads.

## How to download Anime?
There are two methods of downloading currently. One is internal and the other is external. If you download internally, then it can be viewed within the app but only the app can open that episode, you cannot move it or share it. The other option is to use external downloading. It requires a download manager to download and a separate video player to watch. External downloads can be shared but you cannot view it within the Dantotsu app.\n\n•To download internally:\n\n1. Tap the download button.\n2. Pick the server and the video quality.\n3. Profit.\n\n•To download externally:\n\n 1. Download 1DM or ADM from Google Play Store.
        \n2. Enter the app, give storage access and set your preferences (downloading speed, downloading path etc(optional))
        \n3. Now go to \`Dantotsu > Settings > Common > Download Managers\` and choose the download manager you just set up.
        \n4. Go to your desired episode and press on the download icon of any server. There may be a popup to set your preferences again, just press on "Download" and it will be saved in the directed path.

        \n\nNote: Direct downloads are also possible without a manager but it\'s not recommended.
\n\nNerd Note: Internally downloaded episodes are stored in \`Android/data/ani.dantotsu.*/files/Anime_Downloads\`\nYou cannot play those files as they are in \`.exo\` format, split into hundreds of pieces and are encrypted.

## Why did my downloads stop midway?
Downloads stopping midway may be related to network connection issues or source problems.
**himitsu** will provide notifications regarding encountered errors during download attempts.

## Why can't I see my downloads?
Downloads might not be detected due to multiple factors:

* Inaccessibility of the download location.
  > Ensure the SD card is properly detected if in use.
* Source name changes.
  > Rename the source's folder to match the new name.
* Series title modified by the source.
  > Adjust the folder title to the updated name.

## Can I use both internal storage and external SD card storage?
No, you must choose a single location. Internal storage performs better than external SD cards.

## Why does my device photo gallery contain series pages?
**Himitsu** typically prevents series pages in downloads from appearing in your device's photo gallery by default through a `.nomedia` file.
However, in some cases, this might not function as intended.

A quick solution is to create the `.nomedia` file yourself, name it as such, and place it in your downloads folder. If the issue pertains to local source, put the `.nomedia` file in the respective local folder.
