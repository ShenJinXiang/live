function defineClass(constructor, methods, statics) {
	if(methods) extend(constructor, prototype, methods);
	if(statics) extend (constructor, statics);
	return constructor;
}
