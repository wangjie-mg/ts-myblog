/**
 * webpack中的process.env.NODE_ENV
 *
 * node环境中有一个全局变量process表示的就是当前的node进程。
 * process.env包含着关于系统环境的信息，但是process.env没有NODE_env这个变量
 * 这个变量是一个用户自定义的一个变量，我们在webpack中是用来判断是哪个环境的依据
 *
 */
export const IS_DEV:boolean = process.env.NODE_ENV !== 'production';
export const API_ROOT:string = IS_DEV ? "http://localhost:3001/api/" : "http://192.168.100.38:3001/api/";