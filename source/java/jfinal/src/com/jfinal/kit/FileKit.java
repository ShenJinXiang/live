package com.jfinal.kit;

import java.io.File;

/**
 * Created by shenjinxiang on 2017-07-13.
 */
public class FileKit {

    public static void delete(File file) {
        if (file != null && file.exists()) {
            if (file.isFile()) {
                file.delete();
            } else if (file.isDirectory()) {
                File[] files = file.listFiles();

                for (int i = 0; i < files.length; i++) {
                    delete(files[i]);
                }
            }
            file.delete();
        }
    }

}
