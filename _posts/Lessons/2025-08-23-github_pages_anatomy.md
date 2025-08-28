---
layout: post
permalink: /gp
title: Github Pages Anatomy
categories: ['Lesson']
---

## Lesson 2: GitHub Pages Anatomy

---

<div style="border-left: 4px solid #38b2ac; padding-left: 1em; margin-bottom: 1em;">
  <strong style="color:#38b2ac;">Introduction</strong>
  <br>
  Understanding the anatomy of a GitHub Pages site is fundamental to effective web development within this ecosystem. This lesson dissects the core files and directories that constitute a typical GitHub Pages project, explaining their purpose and how they interact to build a functional website.
</div>

<div class="frq-box">
  <b>FRQ 1:</b> Why is it important to understand the structure of a GitHub Pages project before building a website?<br><br>
  <textarea rows="5" style="width:100%;" placeholder="Type your response here..."></textarea>
</div>

---

### Key Files and Directories

---

<div style="background:#f7fafc; border-radius:8px; padding:1em; box-shadow:0 2px 8px #38b2ac22;">
A GitHub Pages project is more than just a collection of HTML files. It&#39;s a structured environment where various file types work together. Here's a breakdown of the essential components:
<ul>
<li><span style="color:#3182ce;"><strong>README.md</strong></span>: This is the instruction manual for your project. It should contain essential information, such as the project&#39;s purpose, setup instructions, and any other relevant details for collaborators or visitors. A well-crafted <code>README.md</code> is a hallmark of a professional GitHub project.</li>
<li><span style="color:#3182ce;"><strong>index.md or index.html</strong></span>: This is the homepage of your website. When a visitor navigates to the root of your GitHub Pages URL, this is the file that will be displayed. You can write it in Markdown (<code>.md</code>) for simplicity or directly in HTML for more complex layouts.</li>
<li><span style="color:#3182ce;"><strong>_config.yml</strong></span>: This is the central configuration file for your Jekyll-powered GitHub Pages site. It contains key-value pairs in YAML format that define site-wide settings, such as the site title, description, theme, and plugins. Careful configuration of this file is crucial for customizing your site&#39;s behavior and appearance.</li>
<li><span style="color:#3182ce;"><strong>_layouts</strong></span>: This directory contains the HTML templates that define the structure of your pages. Each page or post on your site can specify a layout in its frontmatter, and Jekyll will wrap the content of that page within the specified layout. This allows for consistent headers, footers, and overall page structure.</li>
<li><span style="color:#3182ce;"><strong>_includes</strong></span>: This directory holds reusable snippets of HTML that can be included in your layouts or pages. This is useful for components like navigation bars, footers, or sidebars that you want to appear on multiple pages.</li>
<li><span style="color:#3182ce;"><strong>_sass</strong></span>: This directory is where you can customize the styling of your site. It contains Sass (Syntactically Awesome Style Sheets) files, which are a more powerful way to write CSS. You can override the default styles of your theme or add your own custom styles here.</li>
<li><span style="color:#3182ce;"><strong>_posts</strong></span>: If you&#39;re creating a blog, this is where your blog posts will live. Each post is a Markdown or HTML file with a specific naming convention (<code>YYYY-MM-DD-title.md</code>) and contains frontmatter with metadata like the post title, date, and layout.</li>
<li><span style="color:#3182ce;"><strong>_notebooks</strong></span>: As discussed in the previous lesson, this directory is the standard location for Jupyter Notebook (<code>.ipynb</code>) files. These are typically converted to Markdown and then HTML during the build process.</li>
<li><span style="color:#3182ce;"><strong>_data</strong></span>: This directory is for storing structured data in formats like YAML, JSON, or CSV. This data can then be accessed and used throughout your site using Liquid templating.</li>
<li><span style="color:#3182ce;"><strong>images</strong></span>: This is the conventional directory for storing images used on your site. Keeping your images organized here makes them easy to reference in your Markdown or HTML files.</li>
<li><span style="color:#3182ce;"><strong>.gitignore</strong></span>: This file tells Git which files and directories to ignore when tracking changes. This is useful for excluding files that are generated during the build process or that contain sensitive information.</li>
</ul>
</div>

<div class="frq-box">
  <b>FRQ 2:</b> Which three files or directories do you think are the most important for beginners to focus on first, and why?<br><br>
  <textarea rows="5" style="width:100%;" placeholder="Type your response here..."></textarea>
</div>

---

### Interactive File Structure Explorer

---

<div style="background:#f7fafc; border-radius:8px; padding:1.5em; box-shadow:0 2px 8px #38b2ac22; margin:2em 0;">
    <div style="color:#38b2ac; font-size:1.3em; font-weight:600; text-align:center; margin-bottom:1.5em; border-bottom:2px solid #38b2ac; padding-bottom:0.5em; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;">
        📁 GitHub Pages Project Structure & Build Process
    </div>
    
  <div style="display:grid; grid-template-columns:1fr 1fr 300px; gap:1.5em; align-items:start; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;" id="main-grid">
      <!-- File Tree -->
      <div style="background:#2d3748; color:#e2e8f0; padding:1.5em; border-radius:8px; font-family:'Monaco','Menlo','Ubuntu Mono',monospace; font-size:0.85em; line-height:1.6;">
          <div style="color:#38b2ac; font-weight:bold; margin-bottom:1em; font-size:1.05em;">📂 your-github-pages-site/</div>
          <div class="tree-item directory" data-info="includes" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_includes/
          </div>
          <div class="tree-item directory" data-info="layouts" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_layouts/
          </div>
          <div class="tree-item directory" data-info="posts" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_posts/
          </div>
          <div class="tree-item directory" data-info="notebooks" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_notebooks/
          </div>
          <div class="tree-item directory" data-info="sass" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_sass/
          </div>
          <div class="tree-item directory" data-info="data" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>_data/
          </div>
          <div class="tree-item directory" data-info="images" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#68d391;">
              <span style="margin-right:8px; width:16px; text-align:center;">📁</span>images/
          </div>
          <div class="tree-item config-file" data-info="config" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#f6ad55;">
              <span style="margin-right:8px; width:16px; text-align:center;">⚙️</span>_config.yml
          </div>
          <div class="tree-item markdown-file" data-info="index" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#fc8181;">
              <span style="margin-right:8px; width:16px; text-align:center;">🏠</span>index.md
          </div>
          <div class="tree-item markdown-file" data-info="readme" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#fc8181;">
              <span style="margin-right:8px; width:16px; text-align:center;">📖</span>README.md
          </div>
          <div class="tree-item regular-file" data-info="gitignore" style="display:flex; align-items:center; padding:3px 8px; cursor:pointer; transition:all 0.2s ease; border-radius:4px; color:#90cdf4;">
              <span style="margin-right:8px; width:16px; text-align:center;">🚫</span>.gitignore
          </div>
      </div>
      
<!-- Info Panel -->
<div style="background:white; border:2px solid #e2e8f0; border-radius:8px; padding:1.5em; min-height:320px; position:relative;">
  <div class="info-content active" id="default" style="opacity:1; transition:opacity 0.3s ease;">
      <div style="text-align:center; color:#718096; font-style:italic; margin-top:2em;">
          👈 Click any file or folder to explore
          <br><br>
          <small style="color:#4a5568;">This explorer helps you understand what each component does and troubleshoot common GitHub Pages issues.</small>
      </div>
  </div>
  
  <div class="info-content" id="includes" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">📄 _includes</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Reusable HTML snippets like navigation bars, footers, and sidebars. Include them with <code>{% raw %}{% include filename.html %}{% endraw %}</code>.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> If includes aren't showing, check file names match exactly and use proper Liquid syntax.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Reusable</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Components</span>
      </div>
  </div>
  
  <div class="info-content" id="layouts" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">📄 _layouts</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">HTML templates that wrap your content. Specify with <code>layout: template-name</code> in frontmatter.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Page not rendering? Check layout name spelling and ensure the layout file exists.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Templates</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Structure</span>
      </div>
  </div>
  
  <div class="info-content" id="posts" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">📝 _posts</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Blog posts with <code>YYYY-MM-DD-title.md</code> naming. Must include frontmatter with title, date, and layout.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Post not appearing? Check date format and ensure it's not in the future.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Blog</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Content</span>
      </div>
  </div>
  
  <div class="info-content" id="notebooks" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">🔬 _notebooks</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Jupyter notebooks automatically converted to HTML. Include frontmatter at the top cell.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Notebook not converting? Ensure frontmatter is in a markdown cell at the top.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Jupyter</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Data Science</span>
      </div>
  </div>
  
  <div class="info-content" id="sass" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">🎨 _sass</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Sass stylesheets for custom styling. Import with <code>@import</code> in your main CSS file.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Styles not applying? Check import paths and ensure main CSS includes the imports.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Styling</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">CSS</span>
      </div>
  </div>
  
  <div class="info-content" id="data" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">📊 _data</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">YAML, JSON, or CSV files accessible via <code>site.data.filename</code> in Liquid templates.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Data not loading? Check YAML syntax and use proper variable names.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Data</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Dynamic</span>
      </div>
  </div>
  
  <div class="info-content" id="images" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">🖼️ images</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Standard directory for image assets. Reference with <code>![alt](images/filename.jpg)</code>.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Images not displaying? Check file paths and ensure images are committed to repo.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Assets</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Media</span>
      </div>
  </div>
  
  <div class="info-content" id="config" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">⚙️ _config.yml</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Central configuration defining site title, description, theme, plugins, and build settings.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Site not building? Check YAML syntax - indentation and colons matter!
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Configuration</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Settings</span>
      </div>
  </div>
  
  <div class="info-content" id="index" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">🏠 index.md</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Your homepage - the first thing visitors see. Can be Markdown (.md) or HTML (.html).</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Homepage not loading? Ensure file is named exactly 'index' with proper extension.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Homepage</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Entry Point</span>
      </div>
  </div>
  
  <div class="info-content" id="readme" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">📖 README.md</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Project documentation visible on your GitHub repo. Include setup instructions and project details.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Not part of the website build - this is just for GitHub repository visitors.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Documentation</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Instructions</span>
      </div>
  </div>
  
  <div class="info-content" id="gitignore" style="opacity:0; position:absolute; top:1.5em; left:1.5em; right:1.5em; transition:opacity 0.3s ease;">
      <div style="color:#3182ce; font-size:1.1em; font-weight:600; margin-bottom:0.8em; display:flex; align-items:center; gap:8px;">🚫 .gitignore</div>
      <div style="color:#4a5568; line-height:1.5; font-size:0.95em; margin-bottom:1em;">Tells Git which files to ignore. Typically excludes <code>_site/</code>, <code>.sass-cache/</code>, and OS files.</div>
      <div style="background:#e6fffa; padding:0.8em; border-radius:6px; font-size:0.85em; color:#2d3748;">
          <strong>Troubleshooting:</strong> Unwanted files being tracked? Add their patterns to .gitignore and commit.
      </div>
      <div style="margin-top:1em;">
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Git</span>
          <span style="display:inline-block; background:#38b2ac; color:white; padding:3px 10px; border-radius:12px; font-size:0.75em; font-weight:500; margin-right:8px;">Exclusion</span>
      </div>
  </div>
</div>

<!-- Build Process -->
<div style="background:#e6fffa; padding:1.5em; border-radius:8px; border:2px solid #38b2ac;">
  <div style="color:#38b2ac; font-weight:600; margin-bottom:1.5em; text-align:center; font-size:1.1em;">🔄 Jekyll Build</div>
  
  <div style="display:flex; flex-direction:column; gap:1em;">
      <div style="background:white; border:1px solid #38b2ac; border-radius:6px; padding:0.8em; text-align:center;">
          <div style="background:#38b2ac; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:0.8em; font-weight:bold;">3</div>
          <div style="color:#2d3748; font-size:0.85em; font-weight:500;">Generate HTML</div>
      </div>
      <div style="color:#38b2ac; text-align:center; font-size:1.2em; font-weight:bold;">↓</div>
      <div style="background:white; border:1px solid #38b2ac; border-radius:6px; padding:0.8em; text-align:center;">
          <div style="background:#38b2ac; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:0.8em; font-weight:bold;">4</div>
          <div style="color:#2d3748; font-size:0.85em; font-weight:500;">Serve Pages</div>
      </div>
  </div>
  
  <div style="background:#fff; border-radius:6px; padding:1em; margin-top:1em; font-size:0.8em; color:#2d3748; line-height:1.4;">
      <strong>Build Triggers:</strong>
      <br>• Push to main/master branch
      <br>• Enable GitHub Pages
      <br>• Change _config.yml
      <br><br>
      <strong>Common Issues:</strong>
      <br>• YAML syntax errors
      <br>• Missing frontmatter
      <br>• Invalid file paths
  </div>
</div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const treeItems = document.querySelectorAll('.tree-item');
    const infoContents = document.querySelectorAll('.info-content');
    
    // Add hover and click functionality
    treeItems.forEach(item => {
        item.addEventListener('click', function() {
            const infoId = this.getAttribute('data-info');
            
            // Remove active classes
            treeItems.forEach(ti => ti.classList.remove('active'));
            infoContents.forEach(ic => ic.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            this.style.background = 'rgba(56, 178, 172, 0.3)';
            this.style.borderLeft = '3px solid #38b2ac';
            this.style.transform = 'translateX(5px)';
            
            // Show corresponding info
            const targetInfo = document.getElementById(infoId);
            if (targetInfo) {
                targetInfo.classList.add('active');
                targetInfo.style.opacity = '1';
            } else {
                document.getElementById('default').classList.add('active');
                document.getElementById('default').style.opacity = '1';
            }
            
            // Hide other info contents
            infoContents.forEach(ic => {
                if (ic.id !== infoId && ic.id !== 'default') {
                    ic.style.opacity = '0';
                }
            });
            if (infoId !== 'default') {
                document.getElementById('default').style.opacity = '0';
            }
        });
        
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'rgba(56, 178, 172, 0.2)';
                this.style.transform = 'translateX(3px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = '';
                this.style.transform = '';
                this.style.borderLeft = '';
            }
        });
    });
    
    // Responsive handling
    function handleResize() {
        const container = document.getElementById('main-grid');
        if (window.innerWidth <= 768) {
            container.style.gridTemplateColumns = '1fr';
            container.style.gap = '1em';
        } else {
            container.style.gridTemplateColumns = '1fr 1fr 300px';
            container.style.gap = '1.5em';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
</script>

---

### The Build Process

---

<div style="border-left: 4px solid #38b2ac; padding-left: 1em; margin-bottom: 1em;">
GitHub Pages uses Jekyll, a static site generator, to build your website. The process works as follows:
<ol>
<li><strong style="color:#38b2ac;">Jekyll reads your <code>_config.yml</code> file</strong> to understand your site&#39;s configuration.</li>
<li><strong style="color:#38b2ac;">It processes your Markdown, HTML, and Jupyter Notebook files</strong>, applying the layouts and includes you&#39;ve specified.</li>
<li><strong style="color:#38b2ac;">It generates a static HTML website</strong> in a <code>_site</code> directory (which is usually not committed to your repository).</li>
<li><strong style="color:#38b2ac;">GitHub Pages then serves these static HTML files</strong> to your visitors.</li>
</ol>
</div>

<div class="frq-box">
  <b>FRQ 3:</b> Describe the role of the <code>_site</code> directory in the build process. Why isn't it usually committed to GitHub?<br><br>
  <textarea rows="5" style="width:100%;" placeholder="Type your response here..."></textarea>
</div>

---

### Conclusion

---

<div style="background:#e6fffa; border-radius:8px; padding:1em;">
By understanding the role of each file and directory in a GitHub Pages project, you gain the power to customize and control every aspect of your website. This foundational knowledge is essential for building robust and well-organized web projects.
</div>

<div class="frq-box">
  <b>FRQ 4:</b> Summarize how the anatomy of a GitHub Pages project helps developers maintain clean, scalable websites.<br><br>
  <textarea rows="5" style="width:100%;" placeholder="Type your response here..."></textarea>
</div>

<style>
.frq-box {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  margin: 15px 0;
  background: #f9f9f9;
}
textarea {
  font-family: inherit;
  font-size: 1rem;
  padding: 6px;
  border-radius: 6px;
}
</style>

<div style="color:#38b2ac; text-align:center; font-size:1.2em; font-weight:bold;">↓</div>
<div style="background:white; border:1px solid #38b2ac; border-radius:6px; padding:0.8em; text-align:center;">
<div style="background:#38b2ac; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:0.8em; font-weight:bold;">2</div>
<div style="color:#2d3748; font-size:0.85em; font-weight:500;">Process Files</div>
</div>
<div style="color:#38b2ac; text-align:center; font-size:1.2em; font-weight:bold;">↓</div>
<div style="background:white; border:1px solid #38b2ac; border-radius:6px; padding:0.8em; text-align:center;">
<div style="background:#38b2ac; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:0.8em; font-weight:bold;">3</div>
<div style="color:#2d3748; font-size:0.85em; font-weight:500;">Generate HTML</div>
</div>
<div style="color:#38b2ac; text-align:center; font-size:1.2em; font-weight:bold;">↓</div>
<div style="background:white; border:1px solid #38b2ac; border-radius:6px; padding:0.8em; text-align:center;">
<div style="background:#38b2ac; color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:0.8em; font-weight:bold;">4</div>
<div style="color:#2d3748; font-size:0.85em; font-weight:500;">Serve Pages</div>
</div>


<div style="background:#fff; border-radius:6px; padding:1em; margin-top:1em; font-size:0.8em; color:#2d3748; line-height:1.4;">
    <strong>Build Triggers:</strong>
    <br>• Push to main/master branch
    <br>• Enable GitHub Pages
    <br>• Change _config.yml
    <br><br>
    <strong>Common Issues:</strong>
    <br>• YAML syntax errors
    <br>• Missing frontmatter
    <br>• Invalid file paths
</div>