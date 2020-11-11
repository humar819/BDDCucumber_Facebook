package util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigReader {

    private static Properties prop;

    static {
            try {

                // initialize properties object
                prop = new Properties();
                // To access config properties
                FileInputStream fileInputStream = new FileInputStream("config.properties");
                //to load config. properties file
                prop.load(fileInputStream);

            } catch (FileNotFoundException e) {
                System.out.println("Failed to load properties file");
                e.printStackTrace();

            } catch (IOException e) {
                e.printStackTrace();
            }


    }

        public static String getProperty(String key){

        return prop.getProperty(key);
    }

    }


