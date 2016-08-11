# BoldGrid Theme Framework #

[![Build Status](https://api.travis-ci.org/BoldGrid/boldgrid-theme-framework.svg?branch=master)](https://travis-ci.org/BoldGrid/boldgrid-theme-framework)
[![License](https://img.shields.io/badge/license-GPL--2.0%2B-orange.svg)](https://raw.githubusercontent.com/BoldGrid/boldgrid-theme-framework/master/LICENSE)
[![PHP Version](https://img.shields.io/badge/PHP-5.3%2B-blue.svg)](https://php.net)
[![Code Climate](https://codeclimate.com/github/BoldGrid/boldgrid-theme-framework/badges/gpa.svg)](https://codeclimate.com/github/BoldGrid/boldgrid-theme-framework)

* **Contributors:** rramo012, timph
* **Tags:** inspiration,customization,build,create,design
* **Requires at least:** 4.3
* **Tested up to:** 4.5.3
* **License:** GPLv2 or later
* **License URI:** http://www.gnu.org/licenses/gpl-2.0.html

## Description ##

BoldGrid Theme Framework is a library that allows you to easily make BoldGrid themes.
Please see our reference guide for more information: https://www.boldgrid.com/docs/configuration-file

## Installation ##

1. Create a configuration that overrides required fields. Please see the BoldGrid theme
user guide for more information.

1. Include boldgrid-theme-framework.php from your theme's functions.php

## Changelog ##

### 1.2.3 ###
* New Feature: Added SnapChat social media icons.
* Update: Added some default styles to BGTFW components.
* Bug Fix: Addressed jQuery Migrate deprecated notice for .load() in edit buttons.
* Bug Fix: Add blog container class if user sets front page to display their blog posts.
* New Feature: Allow theme activation to trigger recommended/required plugins.

### 1.2.2 ###
* Bug Fix: Background size not being applied to parallax backgrounds.

### 1.2.1 ###
* Update: Updating color palettes tutorial link.
* Bug Fix: Updating the load order of styles into the editor.

### 1.2 ###
* New Feature: Add tutorials link to each section in the menus panel.
* New Feature: Adding container configuration classes.
* Update: Font Awesome updated to 4.6.3.
* Bug Fix: Fixing issue with typography controls 4.4 compatibility.
* Bug Fix: Fixing 4.6 bug causing background image previews to not display.
* Bug Fix: Hiding generic locations that are not in use.
* Bug Fix: Customizer dialog inheriting styles with undesired effects.
* Bug Fix: Stop Wordpress from assigning widgets to our areas on theme switch.
* Bug Fix: Edit buttons display primary menu background even if no menu is present.

### 1.1.9 ###
* Bug Fix: Typography - additional selectors should be read for showing/hiding menu item.
* Bug Fix: Typography - headings/subheadings from configs override each other.

### 1.1.8 ###
* Bug Fix: Edit buttons no longer pull in color from themes.
* Bug Fix: Typography in the editor is no longer prefixed with .mce-content-body.
* Bug Fix: Removed php closing tag from category.config.php.

### 1.1.7 ###
* Update: Added helper method for Inspirations category lookups.
* Bug Fix: On theme activation set default color palette theme_mod.
* New Feature: Colors in the active palette now have animations to upon focusing the control.
* Bug Fix: Staging theme updates reset color palettes.

### 1.1.6 ###
* New Feature: Updated drag behavior to swap colors.
* New Feature: The neutral color of a palette can now be modified with drag and drop.
* New Feature: The UI of color palettes has been improved.
* New Feature: Colors within a users color palette can now be selected from the color picker.
* New Feature: Improved color palette suggestion algorithms.
* New Feature: Enabling customizer edit buttons.
* Bug Fix: Removed duplicate entries of color palettes from saved palettes.

### 1.1.5.1 ###
* Bug Fix: Enable footer switch not fully triggering.

### 1.1.5 ###
* Update: Kirki from v2.1.0.1 to v2.3.2.
* Update: Changed customizer tablet view width to 768px.
* New Feature: Added slim scrollbar support via configs.
* New Feature: Added scroll to top support via configs.
* New Feature: Added support for additional font relationships via configs.
* New Feature: Allow child theme to auto-enqueue it's own js file.
* New Feature: Updated wow.js to support framework configs.
* New Feature: Added blockquote calculations to Main Text font sizes.
* Bug Fix: Headings Text Transform property not saving.

### 1.1.4.1 ###
* Bug Fix: Issue causing Visual Editor widget areas to fail on firefox.

### 1.1.4 ###
* Bug Fix: Issue causing color palette customizer to fail on child themes.
* New Feature: The frameworks root path can now be overwritten with BGTFW_PATH constant.
* New Feature: Text shadow controls are now postMessage.
* New Feature: Tagline will now inherit margin controls from site title.
* Update: Customizer edit buttons now using pencil icon.

### 1.1.3 ###
* Bug fix: Addressed issue where subheadings weren't having font-family property set.
* Bug fix: Inline Links in Visual Editor in Customizer now are working for WP 4.5+.
* Misc: Bootstrap-compile now works with SCRIPT_DEBUG set to true.
* New Feature: Child theme's will transfer menus from parent on activation.

### 1.1.2 ###
* Hotfix: Disable responsive device previews, and use WP's new responsive previews in WP 4.5+.

### 1.1.1 ###
* New Feature: Child themes can now be created and work properly.
* Misc: Replaced Underscore's accessibility classes with Bootstrap's.
* New Feature: Added support for using heading classes that work with typography controls.
* Misc: Code refactor of activate class.
* Misc: Added CodeClimate Configuration.

### 1.1 ###
* Bug fix: Animate.css now can load properly.
* Bug fix: Allow child themes to use their own background images.
* Misc: Updated scssphp dependency to v.0.6.1.
* New Feature: Typography controls now have image previews.
* Bug fix: Unique menu names not formatted correctly.
* Bug fix: On start over, staging menus are not deleted.
* Bug fix: Search results hiding page titles unintentionally.
* Misc: Setting default style of menus as inline.

### 1.0.10 ###
* Update: Changing email links to @example.com.
* Update: Reorganized advanced footer panel.
* Update: Added alt-font to tagline and widgets, and change section title.
* Fix: Correcting issues with sticky footer.

### 1.0.9.2 ###
* Fix: Color palettes not working on staging sites.

### 1.0.9.1 ###
* Fix: Attribution links unintentionally hidden from footer.
* Fix: zIndex issues with magnified files.

### 1.0.9 ###
* Fix: Preventing titles for showing up when menu title is markup.

### 1.0.8.3 ###
* Update: Moved repo to github.

### 1.0.8.2 ###
* Fix: Updating Kirki to 2.0.9

### 1.0.8.1 ###
* Fix: Fixing Issue with toggling controls

### 1.0.8 ###
* Fix:Enable page title toggle on new pages
* Update: Update kirki to v2.0.3
* Update: Updating PHP Sass compiler
* Update: Updating JS Sass compiler
* Fix: Fixing conflict with other plugins that include our PHP compilers

### 1.0.7.1 ###
* New Feature: Adding a page title toggle

### 1.0.7 ###
* Fix: Correcting issues with colors in site previews

### 1.0.6 ###
* New feature: Adding a method to add incline styles to the editor plugins
* Fix: Fixing Style issues in the customizer overlay

### 1.0.5.1 ###
* Bug Fix: Fixing issue with sticky Footer in middle of page
* Bug Fix: Fixed Post page with comments markup issue

### 1.0.5 ###
* New feature: Save menus created by framework in an option.
* Bug Fix: Upon deploying staging, new active site lost Social Media icons.

### 1.0.4 ###
* Bug Fix: Fixed Typos in Advanced Header/Footer Sections
* New feature: Adding readme.txt file

### 1.0.3 ###
* Bug Fix: Fixing issues with special thanks links
* New feature: Added sticky footer options
