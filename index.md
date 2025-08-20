---
layout: base
title: Home
hide: true
---

<style>
.page-header {
    text-align: center;
    margin: 0 0 2rem 0;
    padding: 3rem 0 2rem;
    background: linear-gradient(180deg, rgba(45,45,58,0.7) 0%, rgba(30,30,46,0.5) 100%);
    border-bottom: 1px solid rgba(56,178,172,0.3);
    position: relative;
    overflow: hidden;
}

.page-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(56,178,172,0.7), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.page-header h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color: #38b2ac;
    font-weight: 500;
    text-shadow: 0 0 15px rgba(56,178,172,0.4);
}

.divider {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, rgba(56,178,172,0) 0%, rgba(56,178,172,1) 50%, rgba(56,178,172,0) 100%);
    margin: 1.5rem auto;
    width: 60%;
}

.projects-section {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(45,45,58,0.8) 0%, rgba(30,30,46,0.6) 100%);
    border-radius: 16px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    border: 1px solid rgba(56,178,172,0.2);
    position: relative;
    overflow: hidden;
    margin: 2rem auto;
    max-width: 1200px;
}

.projects-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(56,178,172,0.07) 0%, transparent 50%);
    animation: rotate 20s linear infinite;
    z-index: 0;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.projects-section h2,
.projects-section h3 {
    position: relative;
    z-index: 1;
}

.project-link {
    display: inline-block;
    background-color: #285e61;
    color: #f8f8f2 !important;
    text-decoration: none !important;
    border-radius: 8px;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin: 1rem;
}

.project-link::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s;
}

.project-link:hover {
    background-color: #319795;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
    color: #f8f8f2 !important;
}

.project-link:hover::after {
    opacity: 1;
}

.badges-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 1rem 0;
}

.badges-container a[href*="kasm"] {
    background-color: #38b2ac !important;
}
.badges-container a[href*="vscode"] {
    background-color: #285e61 !important;
}

.badges-container img {
    height: 32px;
    border-radius: 6px;
    transition: transform 0.2s ease;
}

.badges-container img:hover {
    transform: scale(1.05);
}

.custom-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none !important;
    color: white !important;
    font-weight: 600;
    transition: all 0.2s ease;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
}

.custom-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

blockquote {
    background-color: rgba(56,178,172,0.1);
    border-left: 4px solid #38b2ac;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #f8f8f2;
}
</style>

<div class="page-header">
    <h1>Team Dashboard</h1>
</div>

<table>
    <tr>
        <th>Role</th>
        <th>Name</th>
        <th>Repo Location</th>
        <th>Stream</th>
        <th>Repo Name</th>
    </tr>
    <tr>
        <td>Scrum Master</td>
        <td><a href="{{site.baseurl}}/documentation/ahaan/ahaan.html">Ahaan</a></td>
        <td><a href="https://github.com/Ahaanv19/student" target="_blank">github.com/Ahaanv19/student</a></td>
        <td>downstream</td>
        <td>student</td>
    </tr>
    <tr>
        <td>Scrummer</td>
        <td><a href="{{site.baseurl}}/documentation/arnav/arnav.html">Arnav</a></td>
        <td><a href="https://github.com/Arnav210/Arnav_2026" target="_blank">github.com/Arnav210/Arnav_2026</a></td>
        <td>downstream</td>
        <td>Arnav_2026</td>
    </tr>
    <tr>
        <td>Scrummer</td>
        <td><a href="{{site.baseurl}}/documentation/nikhil/nikhil.html">Nikhil</a></td>
        <td><a href="https://github.com/nikhilsna/student" target="_blank">github.com/nikhilsna/student</a></td>
        <td>downstream</td>
        <td>student</td>
    </tr>
    <tr>
        <td>Scrummer</td>
        <td><a href="{{site.baseurl}}/documentation/spencer/spencer.html">Spencer</a></td>
        <td><a href="https://github.com/Frogpants/student_spencer" target="_blank">github.com/Frogpants/student_spencer</a></td>
        <td>downstream</td>
        <td>student_spencer</td>
    </tr>
    <tr>
        <td>Scrummer</td>
        <td><a href="{{site.baseurl}}/documentation/xavier/xavier.html">Xavier</a></td>
        <td><a href="https://github.com/XavierTho/student" target="_blank">github.com/XavierTho/student</a></td>
        <td>downstream</td>
        <td>student</td>
    </tr>
</table>

<div class="projects-section">
<h2>Links to Current Projects</h2>
<hr class="divider">

<h3>
    <a href="{{site.baseurl}}/clicker/" target="_blank" class="project-link">
        Clicker Game
    </a>
        <a href="{{site.baseurl}}/coin-flip" target="_blank" class="project-link">
        Coin Flip
    </a>
</h3>
</div>

<h2>Links to Learning</h2>

<h3>Development Environment</h3>

<blockquote>
    Coding starts with tools, explore these tools and procedures with a click.
</blockquote>

<div class="badges-container">
    <a href="https://github.com/Open-Coding-Society/student">
        <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" alt="GitHub">
    </a>
    <a href="https://open-coding-society.github.io/student">
        <img src="https://img.shields.io/badge/GitHub%20Pages-327FC7?logo=github&logoColor=white" alt="GitHub Pages">
    </a>
    <a href="https://kasm.opencodingsociety.com/" class="custom-button" style="background-color: #6b4bd3ff">
        KASM
    </a>
    <a href="https://vscode.dev/" class="custom-button" style="background-color: #d38a4bff">
        VSCODE
    </a>
</div>

## Using Tools as a Team

<a href="{{site.baseurl}}/teamtools" class="button small" style="background-color: #ddf37dff">
    Teamwork Tools
</a>

## How API's Work

<a href="{{site.baseurl}}/apilesson" class="button small" style="background-color: #338622ff">
    APIs Lesson
</a>

## AP Exam Prep and Career Planning

<a href="{{site.baseurl}}/apcsp" class="button small" style="background-color: #6b4bd3ff">
    AP CSP Study Prep
</a>