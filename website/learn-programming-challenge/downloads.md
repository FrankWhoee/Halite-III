---
layout: doc_page
title: Downloads
breadcrumb: Learn
toc: false
description: Get an introduction to the rules of the game to win the Halite AI Programming Challenge.
sort_key: 3
---

<div class="doc-section" markdown="1">

Download a language-specific starter kit to start building your bot. Can’t find your preferred language? We love contributions! Check out our [contribution guide](/learn-programming-challenge/contributing).


---

## STARTER KITS DOWNLOAD

<div class="table-container">
    <table class="table">
        <thead>
            <tr>
                <td></td>
                <td></td>
                <th colspan="{{ site.data.downloads.platforms | size }}" class="text-center">Operating System</th>
            </tr>
            <tr>
                <th>Language</th>
                <td>Version</td>
                {% for platform in site.data.downloads.platforms %}
                <td>{{ platform }}</td>
                {% endfor %}
            </tr>
        </thead>
        <tbody>
            {% for language in site.data.downloads.languages %}
            <tr>
                <td>{{ language.language }}</td>
                <td>{{ language.version }}</td>
                {% for file in language.files %}
                <td><a href="{{ site.baseurl }}/{{ file }}" onclick="javascript:handleOutboundLinkClicks('play', 'download','starter-kit');return true;">Download</a></td>
                {% endfor %}
            </tr>
            {% endfor %}
            <tr>
                <td>Only Game Engine</td>
                <td>{{ site.data.downloads.version }}</td>
                <td>NA</td>
                {% for file in site.data.downloads.environments %}
                <td><a href="{{ site.baseurl }}/{{ file }}" onclick="javascript:handleOutboundLinkClicks('play', 'download','starter-kit');return true;">Download</a></td>
                {% endfor %}
            </tr>
        </tbody>
    </table>
</div>
<br>
## Halite Tools and Source Download

<div class="table-container">
    <table class="table">
        <thead>
            <tr>
                <th>Tool</th>
                <td>Version</td>
                <td>All Platforms</td>
                <td>MacOS</td>
                <td>Linux</td>
                <td>Windows</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Source</td>
                <td>{{ site.data.downloads.version }}</td>
                <td><a href="{{ site.baseurl }}/{{ site.data.downloads.source }}"  onclick="javascript:handleOutboundLinkClicks('play', 'download','tool');return true;">Download</a></td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            {% for tool in site.data.downloads.tools %}
            <tr>
                <td>{{ tool.name }}</td>
                <td>NA</td>
                {% for url in tool.files %}
                {% if url %}
                <td><a href="{{ site.baseurl }}/{{ url }}">Download</a></td>
                {% else %}
                <td>NA</td>
                {% endif %}
                {% endfor %}
            </tr>
            {% endfor %}
        </tbody>
    </table>
</div>
<br/>
## Community Tools
Our community creates and shares a wide variety of tools for developing Halite bots. Our [Community Halite Projects](https://forums.halite.io/c/community-halite-projects) forum is a great place to talk about a tool you're working on, or one you'd like to see!

* [Reloader Script](https://forums.halite.io/t/halite-3-reloader-script/120) displays the difference a bot's output and a given replay file.
* [Alternative Local Replay Viewer](https://forums.halite.io/t/fluorine-a-halite-3-replay-viewer/99)
* [Match Manager](https://gitlab.com/smiley1983/halite3-match-manager)

<br/>
