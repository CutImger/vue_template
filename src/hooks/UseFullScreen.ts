// 页面全屏 / 退出全屏hook

import { ref } from 'vue';

// 定义类型
interface IsFullScreenOptions {
	isFullScreen: globalThis.Ref<boolean>;
	enterFullScreen: () => void;
	exitFullScreen: () => void;
}

const useFullScreen = (): IsFullScreenOptions => {
	const isFullScreen = ref(false);

	// 切入全屏
	const enterFullScreen = (): void => {
		const element = document.documentElement;
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if ((element as any).mozRequestFullScreen) {
			/* Firefox */
			(element as any).mozRequestFullScreen();
		} else if ((element as any).webkitRequestFullscreen) {
			/* Chrome, Safari, and Opera */
			(element as any).webkitRequestFullscreen();
		} else if ((element as any).msRequestFullscreen) {
			/* IE/Edge */
			(element as any).msRequestFullscreen();
		}
		isFullScreen.value = true;
	};

	// 退出全屏
	const exitFullScreen = (): void => {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if ((document as any).mozCancelFullScreen) {
			/* Firefox */
			(document as any).mozCancelFullScreen();
		} else if ((document as any).webkitExitFullscreen) {
			/* Chrome, Safari, and Opera */
			(document as any).webkitExitFullscreen();
		} else if ((document as any).msExitFullscreen) {
			/* IE/Edge */
			(document as any).msExitFullscreen();
		}
		isFullScreen.value = false;
	};

	return { isFullScreen, enterFullScreen, exitFullScreen };
};

export default useFullScreen;
