import { FWI } from './fwi_core';

const _content_name = new WeakMap();
const _region_name = new WeakMap();

export class Content {

	constructor(name, region_name) {
		_content_name.set(this, name);
		_region_name.set(this, region_name);
	}

	get name() {
		return _content_name.get(this);
	}

	get region_name() {
		return _region_name.get(this);
	}

	static GetDetails(name) {
		return FWI.getURL('content://' + name);
	}

	static Print(region_name, parameters) {
		FWI.RunScript('Content[' + region_name + '].Print(' + parameters + ');');
	}

	static Seek(region_name, direction, wrap = true) {
		FWI.RunScript('Content[' + region_name + '].Seek(' + direction + ', ' + wrap + ');');
	}

	static SetArgument(region_name, o) {
      	for (let [k,v] of o) {
          	FWI.RunScript('Content[' + region_name + '].SetArgument(' + k + ', ' + v + ');');
      	};
	}

	static ShowRoute(region_name, o) {
		for (let [k,v] of o) {
			FWI.RunScript('Content[' + region_name + '].ShowRoute(' + k + ', ' + v + ');');
		}
	}

	static Url(url) {
		FWI.RunScript('Content.Url(' + url + ');');
	}

	static UrlAsync(url) {
		FWI.RunScript('Content.UrlAsync(' + url + ');');
	}

	static Pause(region_name) {
		FWI.RunScript('Content[' + region_name + '].Pause();');
	}

	static Play(region_name) {
		FWI.RunScript('Content[' + region_name + '].Play();');
	}

	static SeekBy(region_name, value) {
		FWI.RunScript('Content[' + region_name + '].SeekBy(' + value + ');');
	}

	static SeekTo(region_name, value) {
		FWI.RunScript('Content[' + region_name + '].SeekTo(' + value + ');');
	}

	static Resume(region_name) {
		FWI.RunScript('Content[' + region_name + '].Resume();');
	}

	static SetBalance(region_name, balance) {
		FWI.RunScript('Content[' + region_name + '].SetBalance(' + balance + ');');
	}

	static SetVolume(region_name, volume) {
		FWI.RunScript('Content[' + region_name + '].SetVolume(' + volume + ');');
	}

	static Stop(region_name) {
		FWI.RunScript('Content[' + region_name + '].Stop();');
	}

	static HighlightRows(region_name, row_list) {
		FWI.RunScript('Content[' + region_name + '].HighlightRows(' + row_list + ');');
	}

	getDetails() {
		return Content.GetDetails(this.name);
	}

	print(parameters) {
		Content.Print(this.region_name, parameters);
	}

	seek(direction, wrap = true) {
		Content.Seek(this.region_name, direction, wrap);
	}

	setArgument(o) {
		Content.SetArgument(this.region_name, o);
	}

	showRoute(o) {
		Content.ShowRoute(this.region_name, o);
	}

	pause() {
		Content.Pause(this.region_name);
	}

	play() {
		Content.Play(this.region_name);
	}

	seekBy(value) {
		Content.SeekBy(this.region_name, value);
	}

	seekTo(value) {
		Content.SeekTo(this.region_name, value);
	}

	resume() {
		Content.Resume(this.region_name);
	}

	setBalance(balance) {
		Content.SetBalance(this.region_name, balance);
	}

	setVolume(volume) {
		Content.SetVolume(this.region_name, volume);
	}

	stop() {
		Content.Stop(this.region_name);
	}
}