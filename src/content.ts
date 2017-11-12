import { FWI } from "./fwi_core.js";

/**
 * These are here to store information about multiple content and regions names
 */
const _content_name = new WeakMap();
const _region_name = new WeakMap();

/**
 * This is the content class it can be used in two ways.  You can access the static methods if you just need
 * a one off operation, or you can create a content item to execute multiple operations on it.
 *
 * Example:
 * ```
 * var item = new Content('Places_Live_Data', 'Live_Data_Region);
 *
 * item.getDetails()
 *
 * item.play()
 * ```
 * or
 * ```
 * var url_contents = Content.Url('https://example.com');
 * ```
 */
export class Content {

  /**
   * Constructor that accespts the content items name and the region the content item is playing in.
   * @param {String} name Name of the content item
   * @param {String} region_name Name of the region the content item resides in
   * @return {Void}
   */
	constructor(name, region_name) {
		_content_name.set(this, name);
		_region_name.set(this, region_name);
	}

  /**
   * Returns the name of the content item
   * @return {String}
   */
	get name() {
		return _content_name.get(this);
	}

  /**
   * Returns the name of the content item
   * @return {String}
   */
	get region_name() {
		return _region_name.get(this);
	}

  /**
   * Returns the content items details, in the case of the live data, it's the data itself.
   * @param {String} name Name of the content item
   * @return {String}
   */
	static GetDetails(name) {
		return FWI.GetUrl('content://' + name);
	}

  /**
   * Prints the regions content item
   * @param {String} region_name Name of the region.
   * @param {String} parameters Printing parameters
   * @return {Void}
   */
	static Print(region_name, parameters) {
		FWI.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
	}

  /**
   * Play the next item in the region
   * @param {String} region_name Name of the region
   * @param {String} direction Forward/Backward
   * @param {Boolean} wrap True/False if it should wrap when it reaches the start/end.
   * @return {Void}
   */
	static Seek(region_name, direction, wrap = true) {
		FWI.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
	}

  /**
   * Sets arguments on currently playing content items
   * @param {String} region_name Name of the region
   * @param {Object} o Object that contains a single object of key pair values for content arguments.
   * @return {Void}
   */
	static SetArgument(region_name, o) {
    FWI.RunScript('Content[' + region_name + '].SetArgument(' + o.keys[0] + ', ' + o.values[0] + ');');
	}

  /**
   * Shows the route on a wayfinding contnet item
   * @param {String} region name Name of the content item
   * @param {Object} o Single key pair object that takes a Location=Location type thing
   * @return {Void}
   */
	static ShowRoute(region_name, o) {
		FWI.RunScript('Content[' + region_name + '].ShowRoute(' + o.keys[0] + '=' + o.values[0] + ');');
	}

  /**
   * Gets the contents of a provided URL.  Blocking operation, CM will freeze while it gets the url contents.
   * @param {String} url www.gooogle.com or www.example.com
   * @return {Void}
   */
	static Url(url) {
		return FWI.RunScript('Content.Url(' + url + ');');
	}

  /**
   * Gets the contents of a provided URL.  Non-blocking operation.  Will return contents to variable once operation is complete.
   * @param {String} url Name of the content item
   * @return {Void}
   */
	static UrlAsync(url) {
		return FWI.RunScript('Content.UrlAsync(' + url + ');');
	}

  /**
   * Pauses a video if it is playing in a region.
   * @param {String} region_name Name of the region that contains the video
   * @return {Void}
   */
	static Pause(region_name) {
		FWI.RunScript('Content[' + region_name + '].Pause();');
	}

  /**
   * Plays a video if it is playing in a region.
   * @param {String} region_name Name of the region that contains the video
   * @return {Void}
   */
	static Play(region_name) {
		FWI.RunScript('Content[' + region_name + '].Play();');
	}

  /**
   * Seeks by a  a particular part of a video if it is playing in a region.
   * @param {String} region_name Name of the region that contains the video
   * @param {String} value Timecode value to seek through the video by.
   * @return {Void}
   */
	static SeekBy(region_name, value) {
		FWI.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
	}

  /**
   * Seeks to a  a particular part of a video if it is playing in a region.
   * @param {String} region_name Name of the region that contains the video
   * @param {String} value Timecode value to seek through the video too.
   * @return {Void}
   */
	static SeekTo(region_name, value) {
		FWI.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
	}

  /**
   * Resumes a paused video if it is playing in a region.
   * @param {String} region_name Name of the region that contains the video
   * @return {Void}
   */
	static Resume(region_name) {
		FWI.RunScript('Content[' + region_name + '].Resume();');
	}

  /**
   * Sets the left right balance of the audio in a video
   * @param {String} region_name Name of the region that contains the video
   * @param {Number} balance Number representing the left right balance.
   * @return {Void}
   */
	static SetBalance(region_name, balance) {
		FWI.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
	}

  /**
   * Sets the audio for a video.
   * @param {String} region_name Name of the region that contains the video
   * @param {Number} volume Number representing the volume
   * @return {Void}
   */
	static SetVolume(region_name, volume) {
		FWI.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
	}

  /**
   * Stops a video in a region if it's scheduled
   * @param {String} region_name Name of the region that contains the video
   * @return {Void}
   */
	static Stop(region_name) {
		FWI.RunScript('Content[' + region_name + '].Stop();');
	}

  /**
   * Highlights one or multiple rows in live data
   * @param {String} region_name Name of the region that contains the video
   * @param {String} row_list Comma seperated list of rows to highlight.
   * @return {Void}
   */
	static HighlightRows(region_name, row_list) {
		FWI.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
	}

  /**
   * Returns the content items details, in the case of the live data, it's the data itself.
   * @return {String}
   */
	getDetails() {
		return Content.GetDetails(this.name);
	}

  /**
   * Prints the regions content item
   * @param {String} parameters Printing parameters
   * @return {Void}
   */
	print(parameters) {
		Content.Print(this.region_name, parameters);
	}

  /**
   * Play the next item in the region
   * @param {String} direction Forward/Backward
   * @param {Boolean} wrap True/False if it should wrap when it reaches the start/end.
   * @return {Void}
   */
	seek(direction, wrap = true) {
		Content.Seek(this.region_name, direction, wrap);
	}

  /**
   * Sets arguments on currently playing content items
   * @param {Object} o Object that contains a single object of key pair values for content arguments.
   * @return {Void}
   */
	setArgument(o) {
		Content.SetArgument(this.region_name, o);
	}

  /**
   * Shows the route on a wayfinding contnet item
   * @param {Object} o Single key pair object that takes a Location=Location type thing
   * @return {Void}
   */
	showRoute(o) {
		Content.ShowRoute(this.region_name, o);
	}

  /**
   * Pauses a video if it is playing in a region.
   * @return {Void}
   */
	pause() {
		Content.Pause(this.region_name);
	}

  /**
   * Plays a video if it is playing in a region.
   * @return {Void}
   */
	play() {
		Content.Play(this.region_name);
	}

  /**
   * Seeks by a  a particular part of a video if it is playing in a region.
   * @param {String} value Timecode value to seek through the video by.
   * @return {Void}
   */
	seekBy(value) {
		Content.SeekBy(this.region_name, value);
	}

  /**
   * Seeks to a  a particular part of a video if it is playing in a region.
   * @param {String} value Timecode value to seek through the video too.
   * @return {Void}
   */
	seekTo(value) {
		Content.SeekTo(this.region_name, value);
	}

  /**
   * Resumes a paused video if it is playing in a region.
   * @return {Void}
   */
	resume() {
		Content.Resume(this.region_name);
	}

  /**
   * Sets the left right balance of the audio in a video
   * @param {Number} balance Number representing the left right balance.
   * @return {Void}
   */
	setBalance(balance) {
		Content.SetBalance(this.region_name, balance);
	}

  /**
   * Sets the audio for a video.
   * @param {Number} volume Number representing the volume
   * @return {Void}
   */
	setVolume(volume) {
		Content.SetVolume(this.region_name, volume);
	}

  /**
   * Stops a video in a region if it's scheduled
   * @return {Void}
   */
	stop() {
		Content.Stop(this.region_name);
	}
}